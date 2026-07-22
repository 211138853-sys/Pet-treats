const products = [
  {
    id: "chicken-jerky",
    name: "慢烘原切鸡胸",
    category: "鸡肉",
    price: 39,
    monthlySales: 1268,
    spec: "100g",
    selling: "整块鸡胸低温慢烘，纤维清晰，薄脆不柴。是挑嘴小家伙也很难拒绝的每日加餐。",
    ingredients: "鲜鸡胸肉 99%、迷迭香提取物",
    pet: "3 月龄以上犬猫",
    image: "assets/images/chicken.png",
    badge: "本店人气"
  },
  {
    id: "chicken-strips",
    name: "南瓜鸡肉软条",
    category: "鸡肉",
    price: 32,
    monthlySales: 836,
    spec: "90g",
    selling: "鸡肉配少量南瓜，柔软好撕，入口温和。适合幼宠、老年宠和偏爱软口感的毛孩子。",
    ingredients: "鲜鸡胸肉 88%、南瓜 10%、木薯淀粉 2%",
    pet: "全犬种及成猫",
    image: "assets/images/pumpkin-chicken.png",
    badge: "柔软易嚼"
  },
  {
    id: "freeze-chicken",
    name: "原肉冻干鸡粒",
    category: "冻干",
    price: 49,
    monthlySales: 952,
    spec: "80g",
    selling: "零下 36°C 真空冻干，锁住鸡肉鲜香。可直接奖励，也可复水拌入主粮。",
    ingredients: "鲜鸡胸肉 100%",
    pet: "犬猫通用",
    image: "assets/images/freeze-dried.png",
    badge: "单一蛋白"
  },
  {
    id: "freeze-liver",
    name: "冻干牛肝小方",
    category: "冻干",
    price: 45,
    monthlySales: 617,
    spec: "70g",
    selling: "浓郁肉香，一小块就能给到高满足感。细切小方，训练时不脏手。",
    ingredients: "新鲜牛肝 100%",
    pet: "4 月龄以上犬猫",
    image: "assets/images/beef-liver.png",
    badge: "高适口性"
  },
  {
    id: "dental-kelp",
    name: "海藻洁齿棒",
    category: "洁齿",
    price: 36,
    monthlySales: 728,
    spec: "120g / 12支",
    selling: "多棱沟槽帮助摩擦牙面，清新口气。每日咀嚼，也是一段安静专注的快乐时间。",
    ingredients: "米粉、甘薯、海藻粉、椰子油",
    pet: "5kg 以上犬只",
    image: "assets/images/dental.png",
    badge: "口气清新"
  },
  {
    id: "dental-milk",
    name: "山羊奶洁齿扭棒",
    category: "洁齿",
    price: 42,
    monthlySales: 485,
    spec: "140g / 10支",
    selling: "柔韧扭纹增加咀嚼接触面，淡淡奶香提升接受度。硬度适中，日常洁齿更轻松。",
    ingredients: "米粉、山羊奶粉、甘油、纤维素",
    pet: "成年犬",
    image: "assets/images/goat-dental.png",
    badge: "耐嚼不粘牙"
  },
  {
    id: "training-duo",
    name: "双拼训练小粒",
    category: "训练奖励",
    price: 29,
    monthlySales: 1386,
    spec: "100g",
    selling: "鸡肉与牛肉两种风味，颗粒小、热量轻，连续奖励也没有负担。",
    ingredients: "鲜鸡肉、鲜牛肉、燕麦粉、甜菜根粉",
    pet: "全犬种",
    image: "assets/images/training.png",
    badge: "训练必备"
  },
  {
    id: "training-heart",
    name: "红菜头牛肉心粒",
    category: "训练奖励",
    price: 34,
    monthlySales: 569,
    spec: "90g",
    selling: "小巧心形，一口一个。用牛肉香气快速抓住注意力，召回和定点训练都顺手。",
    ingredients: "鲜牛肉 82%、燕麦粉、甜菜根粉",
    pet: "3 月龄以上犬只",
    image: "assets/images/beet-beef.png",
    badge: "低负担奖励"
  },
  {
    id: "duck-medallions",
    name: "原切鸭胸圆片",
    category: "鸭肉",
    price: 43,
    monthlySales: 744,
    spec: "90g",
    selling: "鲜鸭胸切成厚薄均匀的小圆片，低温烘到柔韧耐嚼。肉香温和，换换口味正合适。",
    ingredients: "鲜鸭胸肉 99%、迷迭香提取物",
    pet: "3 月龄以上犬猫",
    image: "assets/images/duck.png",
    badge: "低敏肉源"
  },
  {
    id: "salmon-freeze",
    name: "冻干三文鱼粒",
    category: "海味",
    price: 56,
    monthlySales: 689,
    spec: "70g",
    selling: "整块三文鱼真空冻干，保留鱼肉纹理与鲜香。富含天然鱼油，拌粮也很出彩。",
    ingredients: "三文鱼肉 100%",
    pet: "犬猫通用",
    image: "assets/images/salmon.png",
    badge: "亮泽毛发"
  },
  {
    id: "goat-cheese",
    name: "山羊奶酪小方",
    category: "奶酪",
    price: 38,
    monthlySales: 512,
    spec: "85g",
    selling: "浓缩山羊奶做成柔韧小方，奶香自然不甜腻。小块好控制，适合日常奖励。",
    ingredients: "山羊奶、乳清蛋白、木薯淀粉",
    pet: "4 月龄以上犬只",
    image: "assets/images/goat-cheese.png",
    badge: "自然奶香"
  },
  {
    id: "pumpkin-biscuit",
    name: "南瓜燕麦爪爪饼",
    category: "烘焙",
    price: 28,
    monthlySales: 931,
    spec: "120g",
    selling: "南瓜与燕麦慢火烘焙，酥脆但不硌牙。爪印与小骨头造型，让奖励更有仪式感。",
    ingredients: "燕麦粉、南瓜泥、鸡蛋、椰子油",
    pet: "全犬种",
    image: "assets/images/pumpkin-biscuit.png",
    badge: "轻负担烘焙"
  }
];

const STORAGE_KEYS = {
  users: "heye_users_v1",
  session: "heye_session_v1",
  cart: "heye_cart_v1"
};

const categoryLabels = ["全部", "鸡肉", "冻干", "洁齿", "训练奖励", "鸭肉", "海味", "奶酪", "烘焙"];
const state = { category: "全部", cart: loadCart(), selectedId: null };

const productGrid = document.querySelector("#productGrid");
const bestsellerGrid = document.querySelector("#bestsellerGrid");
const filters = document.querySelector("#filters");
const cartItems = document.querySelector("#cartItems");
const cartTotal = document.querySelector("#cartTotal");
const cartCount = document.querySelector("#cartCount");
const checkout = document.querySelector("#checkout");
const toast = document.querySelector("#toast");
const accountLabel = document.querySelector("#accountLabel");
const addressForm = document.querySelector("#addressForm");

const formatPrice = value => `¥${value.toFixed(0)}`;
const getProduct = id => products.find(product => product.id === id);
function getUsers() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.users)) || []; }
  catch { return []; }
}

function loadCart() {
  try { return new Map(JSON.parse(localStorage.getItem(STORAGE_KEYS.cart)) || []); }
  catch { return new Map(); }
}

function persistCart() {
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify([...state.cart.entries()]));
}

function currentUser() {
  const id = localStorage.getItem(STORAGE_KEYS.session);
  return getUsers().find(user => user.id === id) || null;
}

function saveUserAddress(userId, address) {
  const users = getUsers();
  const index = users.findIndex(user => user.id === userId);
  if (index < 0) return;
  users[index].address = address;
  localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users));
}

function renderAccount() {
  const user = currentUser();
  accountLabel.textContent = user ? user.name : "登录 / 注册";
}

function renderFilters() {
  filters.innerHTML = categoryLabels.map(category => `
    <button class="filter-button ${state.category === category ? "active" : ""}" type="button" data-category="${category}" aria-pressed="${state.category === category}">${category}</button>
  `).join("");
}

function renderProducts() {
  const visibleProducts = state.category === "全部"
    ? products
    : products.filter(product => product.category === state.category);

  productGrid.innerHTML = visibleProducts.map(product => `
    <article class="product-card" data-id="${product.id}">
      <div class="product-image-wrap" data-detail="${product.id}" role="button" tabindex="0" aria-label="查看${product.name}详情">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <span class="product-badge">${product.badge}</span>
        <button class="quick-add" type="button" data-add="${product.id}" aria-label="将${product.name}加入购物车">+</button>
      </div>
      <div class="product-info">
        <div>
          <p class="product-category">${product.category} · ${product.spec} · <span>月售 ${product.monthlySales.toLocaleString("zh-CN")}</span></p>
          <h3 class="product-name" data-detail="${product.id}">${product.name}</h3>
        </div>
        <strong class="product-price">${formatPrice(product.price)}</strong>
        <p class="product-desc">${product.selling.split("。")[0]}。</p>

      </div>
    </article>
  `).join("");
}

function renderBestsellers() {
  const bestsellers = [...products]
    .sort((first, second) => second.monthlySales - first.monthlySales)
    .slice(0, 3);

  bestsellerGrid.innerHTML = bestsellers.map((product, index) => `
    <article class="bestseller-card">
      <span class="rank-badge">TOP ${index + 1}</span>
      <button class="bestseller-image" type="button" data-detail="${product.id}" aria-label="查看${product.name}详情">
        <img src="${product.image}" alt="${product.name}">
      </button>
      <div class="bestseller-info">
        <div>
          <p>${product.category} · ${product.spec}</p>
          <h3>${product.name}</h3>
          <span>月售 ${product.monthlySales.toLocaleString("zh-CN")} 份</span>
        </div>
        <strong>${formatPrice(product.price)}</strong>
        <button class="bestseller-add" type="button" data-add="${product.id}" aria-label="将${product.name}加入购物车">+</button>
      </div>
    </article>
  `).join("");
}
function openOverlay(id) {
  document.querySelector(`#${id}`).hidden = false;
  document.body.classList.add("modal-open");
}

function closeOverlay(id) {
  document.querySelector(`#${id}`).hidden = true;
  if (![...document.querySelectorAll(".overlay")].some(overlay => !overlay.hidden)) {
    document.body.classList.remove("modal-open");
  }
}

function openProduct(id) {
  const product = getProduct(id);
  if (!product) return;
  state.selectedId = id;
  document.querySelector("#detailImage").src = product.image;
  document.querySelector("#detailImage").alt = product.name;
  document.querySelector("#detailCategory").textContent = product.category;
  document.querySelector("#detailName").textContent = product.name;
  document.querySelector("#detailSelling").textContent = product.selling;
  document.querySelector("#detailSpec").textContent = product.spec;
  document.querySelector("#detailPet").textContent = product.pet;
  document.querySelector("#detailSales").textContent = `月售 ${product.monthlySales.toLocaleString("zh-CN")} 份`;
  document.querySelector("#detailIngredients").textContent = product.ingredients;
  document.querySelector("#detailPrice").textContent = formatPrice(product.price);
  openOverlay("productOverlay");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function addToCart(id) {
  state.cart.set(id, (state.cart.get(id) || 0) + 1);
  renderCart();
  showToast(`${getProduct(id).name} 已加入购物车`);
}

function updateQuantity(id, change) {
  const nextQuantity = (state.cart.get(id) || 0) + change;
  if (nextQuantity <= 0) state.cart.delete(id);
  else state.cart.set(id, nextQuantity);
  renderCart();
}

function renderCart() {
  const entries = [...state.cart.entries()];
  const totalQuantity = entries.reduce((sum, [, quantity]) => sum + quantity, 0);
  const totalPrice = entries.reduce((sum, [id, quantity]) => sum + getProduct(id).price * quantity, 0);
  cartCount.textContent = totalQuantity;
  cartTotal.textContent = formatPrice(totalPrice);
  checkout.disabled = entries.length === 0;
  persistCart();

  if (!entries.length) {
    cartItems.innerHTML = `<div class="empty-cart"><strong>购物袋还是空的</strong><p>挑一份它会喜欢的奖励吧。</p></div>`;
    return;
  }

  cartItems.innerHTML = entries.map(([id, quantity]) => {
    const product = getProduct(id);
    return `
      <article class="cart-item">
        <img src="${product.image}" alt="${product.name}">
        <div>
          <h3>${product.name}</h3>
          <p>${product.spec}</p>
          <div class="quantity-control" aria-label="调整${product.name}数量">
            <button type="button" data-quantity="-1" data-id="${id}" aria-label="减少数量">−</button>
            <span>${quantity}</span>
            <button type="button" data-quantity="1" data-id="${id}" aria-label="增加数量">+</button>
          </div>
        </div>
        <div class="cart-item-price">${formatPrice(product.price * quantity)}</div>
        <button class="remove-button" type="button" data-remove="${id}">删除</button>
      </article>
    `;
  }).join("");
}

filters.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  renderFilters();
renderBestsellers();
  renderProducts();
});

productGrid.addEventListener("click", event => {
  const addButton = event.target.closest("[data-add]");
  if (addButton) {
    event.stopPropagation();
    addToCart(addButton.dataset.add);
    return;
  }
  const detailTarget = event.target.closest("[data-detail]");
  if (detailTarget) openProduct(detailTarget.dataset.detail);
});

productGrid.addEventListener("keydown", event => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-detail]")) {
    event.preventDefault();
    openProduct(event.target.dataset.detail);
  }
});

bestsellerGrid.addEventListener("click", event => {
  const addButton = event.target.closest("[data-add]");
  if (addButton) {
    addToCart(addButton.dataset.add);
    return;
  }
  const detailTarget = event.target.closest("[data-detail]");
  if (detailTarget) openProduct(detailTarget.dataset.detail);
});
cartItems.addEventListener("click", event => {
  const quantityButton = event.target.closest("[data-quantity]");
  const removeButton = event.target.closest("[data-remove]");
  if (quantityButton) updateQuantity(quantityButton.dataset.id, Number(quantityButton.dataset.quantity));
  if (removeButton) {
    state.cart.delete(removeButton.dataset.remove);
    renderCart();
  }
});

document.querySelector("#detailAdd").addEventListener("click", () => {
  if (state.selectedId) addToCart(state.selectedId);
});

["#openCart", "#heroCart"].forEach(selector => {
  document.querySelector(selector).addEventListener("click", () => openOverlay("cartOverlay"));
});

document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", () => closeOverlay(button.dataset.close));
});

document.querySelectorAll(".overlay").forEach(overlay => {
  overlay.addEventListener("click", event => {
    if (event.target === overlay) closeOverlay(overlay.id);
  });
});

document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  const openOverlayElement = [...document.querySelectorAll(".overlay")].reverse().find(overlay => !overlay.hidden);
  if (openOverlayElement) closeOverlay(openOverlayElement.id);
});

function beginCheckout() {
  if (!state.cart.size) return;
  const user = currentUser();
  if (!user) {
    persistCart();
    location.href = "account.html?redirect=checkout";
    return;
  }

  const address = user.address || { recipient: user.name, phone: user.phone, region: "", detail: "" };
  document.querySelector("#addressRecipient").value = address.recipient;
  document.querySelector("#addressPhone").value = address.phone;
  document.querySelector("#addressRegion").value = address.region;
  document.querySelector("#addressDetail").value = address.detail;
  document.querySelector("#addressTotal").textContent = cartTotal.textContent;
  document.querySelector("#addressError").textContent = "";
  closeOverlay("cartOverlay");
  openOverlay("addressOverlay");
}

checkout.addEventListener("click", beginCheckout);

addressForm.addEventListener("submit", event => {
  event.preventDefault();
  const user = currentUser();
  if (!user) {
    location.href = "account.html?redirect=checkout";
    return;
  }

  const address = {
    recipient: document.querySelector("#addressRecipient").value.trim(),
    phone: document.querySelector("#addressPhone").value.trim(),
    region: document.querySelector("#addressRegion").value.trim(),
    detail: document.querySelector("#addressDetail").value.trim()
  };
  const error = document.querySelector("#addressError");
  if (!/^1\d{10}$/.test(address.phone)) {
    error.textContent = "请输入有效的 11 位联系电话。";
    return;
  }

  saveUserAddress(user.id, address);
  document.querySelector("#successAddress").textContent = `配送至：${address.recipient} · ${address.phone} · ${address.region} ${address.detail}`;
  state.cart.clear();
  renderCart();
  closeOverlay("addressOverlay");
  openOverlay("successOverlay");
});

renderFilters();
renderBestsellers();
renderProducts();
renderCart();
renderAccount();

if (new URLSearchParams(location.search).get("checkout") === "1" && state.cart.size) {
  beginCheckout();
}