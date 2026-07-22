const client = window.getHeyeSupabaseClient();
const setupPanel = document.querySelector("#setupPanel");
const loginView = document.querySelector("#loginView");
const dashboardView = document.querySelector("#dashboardView");
const productList = document.querySelector("#adminProductList");
const productForm = document.querySelector("#productForm");
const toast = document.querySelector("#toast");
let adminProducts = [];

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

function setBusy(isBusy) {
  document.querySelector("#saveProduct").disabled = isBusy;
  document.querySelector("#saveProduct").textContent = isBusy ? "正在保存..." : "保存商品";
}

async function verifyAdmin(user) {
  if (!user) return false;
  const { data, error } = await client.from("admin_users").select("user_id").eq("user_id", user.id).maybeSingle();
  return !error && Boolean(data);
}

async function showDashboard(user) {
  const isAdmin = await verifyAdmin(user);
  if (!isAdmin) {
    await client.auth.signOut({ scope: "local" });
    document.querySelector("#loginError").textContent = "该账户不在管理员白名单中。";
    return;
  }
  loginView.hidden = true;
  dashboardView.hidden = false;
  document.querySelector("#adminIdentity").textContent = user.email;
  await loadProducts();
}

async function loadProducts() {
  const { data, error } = await client.from("products").select("*").order("sort_order").order("created_at");
  if (error) {
    productList.innerHTML = `<p class="admin-error">${escapeHtml(error.message)}</p>`;
    return;
  }
  adminProducts = data;
  renderProducts();
}

function renderProducts(query = "") {
  const keyword = query.trim().toLowerCase();
  const visible = adminProducts.filter(product => `${product.name}${product.category}${product.slug}`.toLowerCase().includes(keyword));
  document.querySelector("#productSummary").textContent = `${adminProducts.length} 款商品 · ${adminProducts.filter(product => product.is_active).length} 款上架`;
  if (!visible.length) {
    productList.innerHTML = `<p>没有匹配的商品。</p>`;
    return;
  }
  productList.innerHTML = visible.map(product => `
    <article class="admin-product-row">
      <img src="${escapeHtml(product.image_url)}" alt="">
      <div><h3>${escapeHtml(product.name)}</h3><p>${escapeHtml(product.category)} · ${escapeHtml(product.spec)} · ${escapeHtml(product.pet_types.join(" / "))}</p></div>
      <strong>¥${Number(product.price).toFixed(0)}</strong>
      <span class="status-badge ${product.is_active ? "" : "off"}">${product.is_active ? "上架" : "下架"}</span>
      <div class="row-actions"><button type="button" data-edit="${product.id}">编辑</button><button type="button" data-toggle="${product.id}">${product.is_active ? "下架" : "上架"}</button></div>
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
  document.querySelector("#existingImageUrl").value = product.image_url;
  document.querySelector("#productName").value = product.name;
  document.querySelector("#productSlug").value = product.slug;
  document.querySelector("#productCategory").value = product.category;
  document.querySelector("#productPrice").value = product.price;
  document.querySelector("#productSpec").value = product.spec;
  document.querySelector("#productCat").checked = product.pet_types.includes("cat");
  document.querySelector("#productDog").checked = product.pet_types.includes("dog");
  document.querySelector("#productSelling").value = product.selling;
  document.querySelector("#productIngredients").value = product.ingredients;
  document.querySelector("#productPetLabel").value = product.pet_label;
  document.querySelector("#productBadge").value = product.badge;
  document.querySelector("#productSales").value = product.monthly_sales;
  document.querySelector("#productRating").value = product.rating;
  document.querySelector("#productReviewCount").value = product.review_count;
  document.querySelector("#productReviewQuote").value = product.review_quote;
  document.querySelector("#productSortOrder").value = product.sort_order;
  document.querySelector("#productActive").value = String(product.is_active);
  document.querySelector("#editorTitle").textContent = `编辑 · ${product.name}`;
  document.querySelector("#deleteProduct").hidden = false;
  document.querySelector("#imagePreview").innerHTML = `<img src="${escapeHtml(product.image_url)}" alt="当前商品图">`;
  document.querySelector("#productError").textContent = "";
  document.querySelector("#productEditor").scrollIntoView({ behavior: "smooth", block: "start" });
}

async function uploadImage(file, slug) {
  if (!file) return document.querySelector("#existingImageUrl").value;
  const extension = file.name.split(".").pop().toLowerCase();
  const path = `${Date.now()}-${slug}.${extension}`;
  const { error } = await client.storage.from("product-images").upload(path, file, { cacheControl: "3600", upsert: false });
  if (error) throw error;
  return client.storage.from("product-images").getPublicUrl(path).data.publicUrl;
}

function formPayload(imageUrl) {
  const petTypes = [];
  if (document.querySelector("#productCat").checked) petTypes.push("cat");
  if (document.querySelector("#productDog").checked) petTypes.push("dog");
  if (!petTypes.length) throw new Error("请至少选择一种适用宠物。");
  return {
    slug: document.querySelector("#productSlug").value.trim(),
    name: document.querySelector("#productName").value.trim(),
    category: document.querySelector("#productCategory").value.trim(),
    pet_types: petTypes,
    price: Number(document.querySelector("#productPrice").value),
    monthly_sales: Number(document.querySelector("#productSales").value),
    spec: document.querySelector("#productSpec").value.trim(),
    selling: document.querySelector("#productSelling").value.trim(),
    ingredients: document.querySelector("#productIngredients").value.trim(),
    pet_label: document.querySelector("#productPetLabel").value.trim(),
    image_url: imageUrl,
    badge: document.querySelector("#productBadge").value.trim(),
    rating: Number(document.querySelector("#productRating").value),
    review_count: Number(document.querySelector("#productReviewCount").value),
    review_quote: document.querySelector("#productReviewQuote").value.trim(),
    is_active: document.querySelector("#productActive").value === "true",
    sort_order: Number(document.querySelector("#productSortOrder").value || 0)
  };
}

document.querySelector("#adminLoginForm").addEventListener("submit", async event => {
  event.preventDefault();
  const errorNode = document.querySelector("#loginError");
  errorNode.textContent = "";
  const { data, error } = await client.auth.signInWithPassword({
    email: document.querySelector("#adminEmail").value.trim(),
    password: document.querySelector("#adminPassword").value
  });
  if (error) {
    errorNode.textContent = "登录失败：" + error.message;
    return;
  }
  await showDashboard(data.user);
});

productForm.addEventListener("submit", async event => {
  event.preventDefault();
  const errorNode = document.querySelector("#productError");
  errorNode.textContent = "";
  setBusy(true);
  try {
    const id = document.querySelector("#productId").value;
    const imageUrl = await uploadImage(document.querySelector("#productImage").files[0], document.querySelector("#productSlug").value.trim());
    if (!imageUrl) throw new Error("请上传商品图片。");
    const payload = formPayload(imageUrl);
    const query = id ? client.from("products").update(payload).eq("id", id) : client.from("products").insert(payload);
    const { error } = await query;
    if (error) throw error;
    showToast(id ? "商品已更新" : "商品已新增");
    await loadProducts();
    resetEditor();
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
  if (toggleButton) {
    const product = adminProducts.find(item => item.id === toggleButton.dataset.toggle);
    const { error } = await client.from("products").update({ is_active: !product.is_active }).eq("id", product.id);
    if (error) showToast(error.message);
    else { showToast(product.is_active ? "商品已下架" : "商品已上架"); await loadProducts(); }
  }
});

document.querySelector("#deleteProduct").addEventListener("click", async () => {
  const id = document.querySelector("#productId").value;
  const product = adminProducts.find(item => item.id === id);
  if (!product || !confirm(`确认删除“${product.name}”？此操作不可撤销。`)) return;
  const { error } = await client.from("products").delete().eq("id", id);
  if (error) document.querySelector("#productError").textContent = error.message;
  else { showToast("商品已删除"); await loadProducts(); resetEditor(); }
});

document.querySelector("#productImage").addEventListener("change", event => {
  const file = event.target.files[0];
  if (!file) return;
  document.querySelector("#imagePreview").innerHTML = `<img src="${URL.createObjectURL(file)}" alt="待上传商品图">`;
});

document.querySelector("#productSearch").addEventListener("input", event => renderProducts(event.target.value));
document.querySelector("#newProductButton").addEventListener("click", resetEditor);
document.querySelector("#closeEditor").addEventListener("click", resetEditor);
document.querySelector("#adminLogout").addEventListener("click", async () => {
  await client.auth.signOut({ scope: "local" });
  location.reload();
});

async function initializeAdmin() {
  if (!client) {
    setupPanel.hidden = false;
    loginView.hidden = true;
    return;
  }
  const { data } = await client.auth.getSession();
  if (data.session) await showDashboard(data.session.user);
  else loginView.hidden = false;
  resetEditor();
}

initializeAdmin();
