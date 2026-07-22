const config = window.HEYE_GITHUB_CONFIG;
const ADMIN_TOKEN_KEY = "heye_github_admin_token_v1";
const loginView = document.querySelector("#loginView");
const dashboardView = document.querySelector("#dashboardView");
const productList = document.querySelector("#adminProductList");
const productForm = document.querySelector("#productForm");
const toast = document.querySelector("#toast");
let githubToken = sessionStorage.getItem(ADMIN_TOKEN_KEY) || "";
let productsSha = "";
let adminProducts = [];

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2400);
}

function setBusy(isBusy) {
  document.querySelector("#saveProduct").disabled = isBusy;
  document.querySelector("#saveProduct").textContent = isBusy ? "正在保存..." : "保存商品";
}

function encodeBase64(bytes) {
  let binary = "";
  const chunkSize = 0x8000;
  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + chunkSize));
  }
  return btoa(binary);
}

function encodeText(value) {
  return encodeBase64(new TextEncoder().encode(value));
}

function decodeText(value) {
  const binary = atob(value.replace(/\n/g, ""));
  const bytes = Uint8Array.from(binary, character => character.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

async function githubRequest(path, options = {}) {
  const response = await fetch(`https://api.github.com${path}`, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${githubToken}`,
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options.headers || {})
    }
  });
  const data = response.status === 204 ? null : await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || `GitHub 请求失败（${response.status}）`);
  return data;
}

function contentsPath(path) {
  return `/repos/${config.owner}/${config.repo}/contents/${path}`;
}

async function loadProducts() {
  const data = await githubRequest(`${contentsPath(config.productsPath)}?ref=${encodeURIComponent(config.branch)}`);
  productsSha = data.sha;
  adminProducts = JSON.parse(decodeText(data.content)).sort((a, b) => a.sortOrder - b.sortOrder);
  renderProducts();
}

async function saveProducts(message) {
  const data = await githubRequest(contentsPath(config.productsPath), {
    method: "PUT",
    body: JSON.stringify({
      message,
      content: encodeText(`${JSON.stringify(adminProducts, null, 2)}\n`),
      sha: productsSha,
      branch: config.branch
    })
  });
  productsSha = data.content.sha;
}

function renderProducts(query = "") {
  const keyword = query.trim().toLowerCase();
  const visible = adminProducts.filter(product => `${product.name}${product.category}${product.id}`.toLowerCase().includes(keyword));
  document.querySelector("#productSummary").textContent = `${adminProducts.length} 款商品 · ${adminProducts.filter(product => product.isActive).length} 款上架`;
  if (!visible.length) {
    productList.innerHTML = "<p>没有匹配的商品。</p>";
    return;
  }
  productList.innerHTML = visible.map(product => `
    <article class="admin-product-row">
      <img src="${escapeHtml(product.image)}" alt="">
      <div><h3>${escapeHtml(product.name)}</h3><p>${escapeHtml(product.category)} · ${escapeHtml(product.spec)} · ${escapeHtml(product.petTypes.join(" / "))}</p></div>
      <strong>¥${Number(product.price).toFixed(0)}</strong>
      <span class="status-badge ${product.isActive ? "" : "off"}">${product.isActive ? "上架" : "下架"}</span>
      <div class="row-actions"><button type="button" data-edit="${product.id}">编辑</button><button type="button" data-toggle="${product.id}">${product.isActive ? "下架" : "上架"}</button></div>
    </article>
  `).join("");
}

function resetEditor() {
  productForm.reset();
  document.querySelector("#productId").value = "";
  document.querySelector("#existingImageUrl").value = "";
  document.querySelector("#productDog").checked = true;
  document.querySelector("#productBadge").value = "新品";
  document.querySelector("#productRating").value = "5";
  document.querySelector("#productSales").value = "0";
  document.querySelector("#productReviewCount").value = "0";
  document.querySelector("#productSortOrder").value = String((adminProducts.length + 1) * 10);
  document.querySelector("#productActive").value = "true";
  document.querySelector("#editorTitle").textContent = "新增商品";
  document.querySelector("#deleteProduct").hidden = true;
  document.querySelector("#imagePreview").textContent = "等待选择图片";
  document.querySelector("#productError").textContent = "";
}

function editProduct(id) {
  const product = adminProducts.find(item => item.id === id);
  if (!product) return;
  document.querySelector("#productId").value = product.id;
  document.querySelector("#existingImageUrl").value = product.image;
  document.querySelector("#productName").value = product.name;
  document.querySelector("#productSlug").value = product.id;
  document.querySelector("#productCategory").value = product.category;
  document.querySelector("#productPrice").value = product.price;
  document.querySelector("#productSpec").value = product.spec;
  document.querySelector("#productCat").checked = product.petTypes.includes("cat");
  document.querySelector("#productDog").checked = product.petTypes.includes("dog");
  document.querySelector("#productSelling").value = product.selling;
  document.querySelector("#productIngredients").value = product.ingredients;
  document.querySelector("#productPetLabel").value = product.pet;
  document.querySelector("#productBadge").value = product.badge;
  document.querySelector("#productSales").value = product.monthlySales;
  document.querySelector("#productRating").value = product.rating;
  document.querySelector("#productReviewCount").value = product.reviewCount;
  document.querySelector("#productReviewQuote").value = product.reviewQuote;
  document.querySelector("#productSortOrder").value = product.sortOrder;
  document.querySelector("#productActive").value = String(product.isActive);
  document.querySelector("#editorTitle").textContent = `编辑 · ${product.name}`;
  document.querySelector("#deleteProduct").hidden = false;
  document.querySelector("#imagePreview").innerHTML = `<img src="${escapeHtml(product.image)}" alt="当前商品图片">`;
  document.querySelector("#productError").textContent = "";
  document.querySelector("#productEditor").scrollIntoView({ behavior: "smooth", block: "start" });
}

async function uploadImage(file, slug) {
  if (!file) return document.querySelector("#existingImageUrl").value;
  if (file.size > 5 * 1024 * 1024) throw new Error("图片不能超过 5MB。");
  const extension = (file.name.split(".").pop() || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "");
  const path = `${config.uploadsPath}/${Date.now()}-${slug}.${extension}`;
  await githubRequest(contentsPath(path), {
    method: "PUT",
    body: JSON.stringify({
      message: `上传商品图片：${slug}`,
      content: encodeBase64(new Uint8Array(await file.arrayBuffer())),
      branch: config.branch
    })
  });
  return path;
}

function formPayload(image) {
  const petTypes = [];
  if (document.querySelector("#productCat").checked) petTypes.push("cat");
  if (document.querySelector("#productDog").checked) petTypes.push("dog");
  if (!petTypes.length) throw new Error("请至少选择一种适用宠物。");
  return {
    id: document.querySelector("#productSlug").value.trim(),
    petTypes,
    name: document.querySelector("#productName").value.trim(),
    category: document.querySelector("#productCategory").value.trim(),
    price: Number(document.querySelector("#productPrice").value),
    monthlySales: Number(document.querySelector("#productSales").value),
    spec: document.querySelector("#productSpec").value.trim(),
    selling: document.querySelector("#productSelling").value.trim(),
    ingredients: document.querySelector("#productIngredients").value.trim(),
    pet: document.querySelector("#productPetLabel").value.trim(),
    image,
    badge: document.querySelector("#productBadge").value.trim(),
    rating: Number(document.querySelector("#productRating").value),
    reviewCount: Number(document.querySelector("#productReviewCount").value),
    reviewQuote: document.querySelector("#productReviewQuote").value.trim(),
    isActive: document.querySelector("#productActive").value === "true",
    sortOrder: Number(document.querySelector("#productSortOrder").value || 0)
  };
}

async function openDashboard() {
  const repository = await githubRequest("/repos/" + config.owner + "/" + config.repo);
  document.querySelector("#adminIdentity").textContent = repository.full_name;
  await loadProducts();
  loginView.hidden = true;
  dashboardView.hidden = false;
  resetEditor();
}

document.querySelector("#adminLoginForm").addEventListener("submit", async event => {
  event.preventDefault();
  const errorNode = document.querySelector("#loginError");
  errorNode.textContent = "";
  githubToken = document.querySelector("#githubToken").value.trim();
  try {
    await openDashboard();
    sessionStorage.setItem(ADMIN_TOKEN_KEY, githubToken);
  } catch (error) {
    githubToken = "";
    sessionStorage.removeItem(ADMIN_TOKEN_KEY);
    errorNode.textContent = "连接失败：" + error.message;
  }
});
productForm.addEventListener("submit", async event => {
  event.preventDefault();
  const errorNode = document.querySelector("#productError");
  errorNode.textContent = "";
  setBusy(true);
  try {
    const originalId = document.querySelector("#productId").value;
    const slug = document.querySelector("#productSlug").value.trim();
    if (adminProducts.some(product => product.id === slug && product.id !== originalId)) throw new Error("商品 ID 已存在，请换一个。");
    const image = await uploadImage(document.querySelector("#productImage").files[0], slug);
    if (!image) throw new Error("请上传商品图片。");
    const product = formPayload(image);
    const index = adminProducts.findIndex(item => item.id === originalId);
    if (index >= 0) adminProducts[index] = product;
    else adminProducts.push(product);
    adminProducts.sort((a, b) => a.sortOrder - b.sortOrder);
    await saveProducts(index >= 0 ? `更新商品：${product.name}` : `新增商品：${product.name}`);
    renderProducts();
    resetEditor();
    showToast("保存成功，网站约 1 分钟后更新");
  } catch (error) {
    errorNode.textContent = error.message;
  } finally {
    setBusy(false);
  }
});

productList.addEventListener("click", async event => {
  const editButton = event.target.closest("[data-edit]");
  const toggleButton = event.target.closest("[data-toggle]");
  if (editButton) editProduct(editButton.dataset.edit);
  if (!toggleButton) return;
  const product = adminProducts.find(item => item.id === toggleButton.dataset.toggle);
  if (!product) return;
  product.isActive = !product.isActive;
  try {
    await saveProducts(`${product.isActive ? "上架" : "下架"}商品：${product.name}`);
    renderProducts(document.querySelector("#productSearch").value);
    showToast(product.isActive ? "商品已上架" : "商品已下架");
  } catch (error) {
    product.isActive = !product.isActive;
    showToast(error.message);
  }
});

document.querySelector("#deleteProduct").addEventListener("click", async () => {
  const id = document.querySelector("#productId").value;
  const product = adminProducts.find(item => item.id === id);
  if (!product || !confirm(`确认删除“${product.name}”？此操作会提交到 GitHub。`)) return;
  const snapshot = [...adminProducts];
  adminProducts = adminProducts.filter(item => item.id !== id);
  try {
    await saveProducts(`删除商品：${product.name}`);
    renderProducts();
    resetEditor();
    showToast("商品已删除");
  } catch (error) {
    adminProducts = snapshot;
    document.querySelector("#productError").textContent = error.message;
  }
});

document.querySelector("#productImage").addEventListener("change", event => {
  const file = event.target.files[0];
  if (file) document.querySelector("#imagePreview").innerHTML = `<img src="${URL.createObjectURL(file)}" alt="待上传商品图片">`;
});

document.querySelector("#productSearch").addEventListener("input", event => renderProducts(event.target.value));
document.querySelector("#newProductButton").addEventListener("click", resetEditor);
document.querySelector("#closeEditor").addEventListener("click", resetEditor);
document.querySelector("#adminLogout").addEventListener("click", () => {
  githubToken = "";
  sessionStorage.removeItem(ADMIN_TOKEN_KEY);
  location.reload();
});

async function initializeAdmin() {
  resetEditor();
  if (!githubToken) return;
  try {
    await openDashboard();
  } catch {
    githubToken = "";
    sessionStorage.removeItem(ADMIN_TOKEN_KEY);
  }
}

initializeAdmin();