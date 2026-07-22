const fallbackProducts = [
  {
    id: "chicken-jerky",
    petTypes: ["cat", "dog"],
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
    petTypes: ["cat", "dog"],
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
    petTypes: ["cat", "dog"],
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
    petTypes: ["cat", "dog"],
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
    petTypes: ["dog"],
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
    petTypes: ["dog"],
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
    petTypes: ["dog"],
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
    petTypes: ["dog"],
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
    petTypes: ["cat", "dog"],
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
    petTypes: ["cat", "dog"],
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
    petTypes: ["dog"],
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
    petTypes: ["dog"],
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

let products = [...fallbackProducts];

const reviewMeta = {
  "chicken-jerky": { rating: 4.9, count: 386, quote: "鸡肉纤维很干爽，拆袋香但不油手，家里两只都很爱吃。" },
  "chicken-strips": { rating: 4.8, count: 214, quote: "软条很好撕，给老年犬做小块奖励很方便。" },
  "freeze-chicken": { rating: 4.9, count: 302, quote: "复水拌粮很香，冻干块大小也比较均匀。" },
  "freeze-liver": { rating: 4.7, count: 165, quote: "适口性特别强，训练召回时很管用。" },
  "dental-kelp": { rating: 4.8, count: 188, quote: "硬度适中，吃完没有碎屑掉得到处都是。" },
  "dental-milk": { rating: 4.7, count: 121, quote: "奶香自然，咀嚼时间比普通零食更久。" },
  "training-duo": { rating: 4.9, count: 433, quote: "颗粒小，连续奖励不会一下吃太多，训练很顺手。" },
  "training-heart": { rating: 4.8, count: 176, quote: "心形小粒不粘手，出门随身带很方便。" },
  "duck-medallions": { rating: 4.8, count: 198, quote: "鸭肉片厚薄刚好，挑嘴的小家伙也愿意吃。" },
  "salmon-freeze": { rating: 4.9, count: 241, quote: "鱼肉纹理很清楚，掰碎拌粮接受度很高。" },
  "goat-cheese": { rating: 4.7, count: 109, quote: "奶味不冲，小方块拿来做安静奖励正合适。" },
  "pumpkin-biscuit": { rating: 4.8, count: 276, quote: "饼干酥脆但不硬，造型也很可爱。" }
};
const STORAGE_KEYS = {
  users: "heye_users_v1",
  session: "heye_session_v1",
  cart: "heye_cart_v1",
  reviews: "heye_reviews_v1"
};

const petTypeLabels = [
  { value: "all", label: "全部宠物" },
  { value: "cat", label: "猫猫" },
  { value: "dog", label: "狗狗" }
];
const state = { petType: "all", category: "全部食品", query: "", sort: "default", cart: loadCart(), selectedId: null };

const productGrid = document.querySelector("#productGrid");
const bestsellerGrid = document.querySelector("#bestsellerGrid");
const petFilters = document.querySelector("#petFilters");
const foodFilters = document.querySelector("#foodFilters");
const cartItems = document.querySelector("#cartItems");
const cartTotal = document.querySelector("#cartTotal");
const cartCount = document.querySelector("#cartCount");
const checkout = document.querySelector("#checkout");
const productSearch = document.querySelector("#productSearch");
const clearProductSearch = document.querySelector("#clearProductSearch");
const productSort = document.querySelector("#productSort");
const productResultCount = document.querySelector("#productResultCount");
const shippingMessage = document.querySelector("#shippingMessage");
const shippingProgress = document.querySelector("#shippingProgress");
const mobileCartBar = document.querySelector("#mobileCartBar");
const mobileCartMeta = document.querySelector("#mobileCartMeta");
const mobileCartTotal = document.querySelector("#mobileCartTotal");
const toast = document.querySelector("#toast");
const accountLabel = document.querySelector("#accountLabel");
const addressForm = document.querySelector("#addressForm");
const recommendationGrid = document.querySelector("#recommendationGrid");
const recommendationReason = document.querySelector("#recommendationReason");
const reviewForm = document.querySelector("#reviewForm");
const adminEntry = document.querySelector("#adminEntry");

const formatPrice = value => `¥${value.toFixed(0)}`;
const getProduct = id => products.find(product => product.id === id);
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

function getLocalReviews() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.reviews)) || []; }
  catch { return []; }
}

function saveLocalReviews(reviews) {
  localStorage.setItem(STORAGE_KEYS.reviews, JSON.stringify(reviews));
}

function getReviewStats(productId) {
  const base = reviewMeta[productId];
  const local = getLocalReviews().filter(review => review.productId === productId);
  const totalCount = base.count + local.length;
  const totalScore = base.rating * base.count + local.reduce((sum, review) => sum + review.rating, 0);
  return { rating: (totalScore / totalCount).toFixed(1), count: totalCount };
}

function formatReviewSummary(productId) {
  const stats = getReviewStats(productId);
  return `★ ${stats.rating} · ${stats.count} 条评价`;
}
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
function renderAdminEntry() {
  adminEntry.hidden = !sessionStorage.getItem("heye_github_admin_token_v1");
}

function matchesPet(product) {
  return state.petType === "all" || product.petTypes.includes(state.petType);
}

function renderFilters() {
  petFilters.innerHTML = petTypeLabels.map(petType => `
    <button class="filter-button pet-filter-button ${state.petType === petType.value ? "active" : ""}" type="button" data-pet-type="${petType.value}" aria-pressed="${state.petType === petType.value}">${petType.label}</button>
  `).join("");

  const availableCategories = ["全部食品", ...new Set(
    products.filter(matchesPet).map(product => product.category)
  )];
  foodFilters.innerHTML = availableCategories.map(category => `
    <button class="filter-button ${state.category === category ? "active" : ""}" type="button" data-category="${category}" aria-pressed="${state.category === category}">${category}</button>
  `).join("");
}

function renderProducts() {
  const normalizedQuery = state.query.trim().toLowerCase();
  let visibleProducts = products.filter(product =>
    matchesPet(product) &&
    (state.category === "全部食品" || product.category === state.category) &&
    (!normalizedQuery || (product.name + product.category + product.selling + product.ingredients).toLowerCase().includes(normalizedQuery))
  );

  const sorters = {
    sales: (first, second) => second.monthlySales - first.monthlySales,
    rating: (first, second) => getReviewStats(second.id).rating - getReviewStats(first.id).rating,
    "price-asc": (first, second) => first.price - second.price,
    "price-desc": (first, second) => second.price - first.price
  };
  if (sorters[state.sort]) visibleProducts = [...visibleProducts].sort(sorters[state.sort]);

  productResultCount.textContent = "找到 " + visibleProducts.length + " 款";
  clearProductSearch.hidden = !state.query;
  if (!visibleProducts.length) {
    productGrid.innerHTML = '<div class="product-empty"><strong>没有找到合适的零食</strong><p>换个关键词，或清除筛选后再看看。</p><button type="button" id="resetProductFilters">清除筛选</button></div>';
    return;
  }
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
        <p class="product-rating">${formatReviewSummary(product.id)}</p>

      </div>
    </article>
  `).join("");
}

function renderRecommendations() {
  const user = currentUser();
  if (!user) {
    recommendationReason.textContent = "登录并完善宠物档案，获得更合适的零食推荐。";
    recommendationGrid.innerHTML = `
      <div class="recommendation-empty">
        <strong>先告诉我们它是谁</strong>
        <p>记录宠物类型、年龄和需要避开的食材，推荐会更靠谱。</p>
        <a class="button button-primary" href="account.html">登录 / 注册</a>
      </div>
    `;
    return;
  }

  if (!user.pet) {
    recommendationReason.textContent = "完善主宠档案后，这里会按它的情况自动选品。";
    recommendationGrid.innerHTML = `
      <div class="recommendation-empty">
        <strong>还差一份主宠档案</strong>
        <p>填写宠物类型和过敏源，只需要一分钟。</p>
        <a class="button button-primary" href="account.html">完善宠物档案</a>
      </div>
    `;
    return;
  }

  const pet = user.pet;
  const allergyTokens = (pet.allergies || "").split(/[、，,\s]+/).filter(Boolean);
  const recommendations = products
    .filter(product => product.petTypes.includes(pet.type))
    .filter(product => !allergyTokens.some(token => `${product.name}${product.ingredients}`.includes(token)))
    .sort((first, second) => second.monthlySales - first.monthlySales)
    .slice(0, 4);

  const petTypeName = pet.type === "cat" ? "猫猫" : "狗狗";
  recommendationReason.textContent = `为${pet.name}推荐 · ${petTypeName}${allergyTokens.length ? ` · 已避开${allergyTokens.join("、")}` : ""}`;

  if (!recommendations.length) {
    recommendationGrid.innerHTML = `
      <div class="recommendation-empty">
        <strong>暂时没有完全匹配的商品</strong>
        <p>可以调整需要避开的食材，或查看全部商品。</p>
        <a class="button button-primary" href="account.html">调整宠物档案</a>
      </div>
    `;
    return;
  }

  recommendationGrid.innerHTML = recommendations.map(product => `
    <article class="recommendation-card">
      <button class="recommendation-image" type="button" data-detail="${product.id}" aria-label="查看${product.name}详情">
        <img src="${product.image}" alt="${product.name}">
      </button>
      <div class="recommendation-info">
        <p>${product.category} · ${product.spec}</p>
        <h3>${product.name}</h3>
        <span>${formatReviewSummary(product.id)}</span>
        <div><strong>${formatPrice(product.price)}</strong><button type="button" data-add="${product.id}" aria-label="将${product.name}加入购物车">+</button></div>
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

function renderProductReviews(product) {
  const stats = getReviewStats(product.id);
  const localReviews = getLocalReviews()
    .filter(review => review.productId === product.id)
    .sort((first, second) => second.date.localeCompare(first.date));
  document.querySelector("#detailRating").textContent = `★ ${stats.rating} · ${stats.count} 条`;

  const localMarkup = localReviews.map(review => `
    <article class="review-item">
      <div><strong>${escapeHtml(review.userName)}</strong><span>${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</span></div>
      <p>${escapeHtml(review.text)}</p>
      <small>${escapeHtml(review.date)}</small>
    </article>
  `).join("");
  const base = reviewMeta[product.id];
  const baseMarkup = `
    <article class="review-item">
      <div><strong>近期已购用户</strong><span>${"★".repeat(Math.round(base.rating))}${"☆".repeat(5 - Math.round(base.rating))}</span></div>
      <p>${escapeHtml(base.quote)}</p>
      <small>精选评价</small>
    </article>
  `;
  document.querySelector("#detailReviewList").innerHTML = localMarkup + baseMarkup;

  const user = currentUser();
  reviewForm.hidden = !user;
  document.querySelector("#reviewLoginHint").hidden = Boolean(user);
  document.querySelector("#reviewError").textContent = "";
  if (user) {
    const existing = localReviews.find(review => review.userId === user.id);
    document.querySelector("#reviewRating").value = existing ? String(existing.rating) : "5";
    document.querySelector("#reviewText").value = existing ? existing.text : "";
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
  renderProductReviews(product);
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
  const entries = [...state.cart.entries()].filter(([id]) => getProduct(id));
  if (entries.length !== state.cart.size) state.cart = new Map(entries);
  const totalQuantity = entries.reduce((sum, [, quantity]) => sum + quantity, 0);
  const totalPrice = entries.reduce((sum, [id, quantity]) => sum + getProduct(id).price * quantity, 0);
  cartCount.textContent = totalQuantity;
  cartTotal.textContent = formatPrice(totalPrice);
  const remainingForShipping = Math.max(0, 99 - totalPrice);
  shippingMessage.textContent = totalPrice >= 99 ? "已享全场包邮" : (totalPrice ? "再选 " + formatPrice(remainingForShipping) + " 即享包邮" : "满 ¥99 包邮");
  shippingProgress.style.width = Math.min(100, totalPrice / 99 * 100) + "%";
  mobileCartBar.hidden = entries.length === 0;
  mobileCartMeta.textContent = "购物袋 · " + totalQuantity + " 件";
  mobileCartTotal.textContent = formatPrice(totalPrice);
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

petFilters.addEventListener("click", event => {
  const button = event.target.closest("[data-pet-type]");
  if (!button) return;
  state.petType = button.dataset.petType;
  state.category = "全部食品";
  renderFilters();
  renderProducts();
});

foodFilters.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  renderFilters();
  renderProducts();
});
document.querySelectorAll("[data-pet-shortcut]").forEach(button => {
  button.addEventListener("click", () => {
    state.petType = button.dataset.petShortcut;
    state.category = "全部食品";
    state.query = "";
    productSearch.value = "";
    clearProductSearch.hidden = true;
    renderFilters();
    renderProducts();
    document.querySelector("#products").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
productSearch.addEventListener("input", event => {
  state.query = event.target.value;
  renderProducts();
});

clearProductSearch.addEventListener("click", () => {
  state.query = "";
  productSearch.value = "";
  productSearch.focus();
  renderProducts();
});

productSort.addEventListener("change", event => {
  state.sort = event.target.value;
  renderProducts();
});

productGrid.addEventListener("click", event => {
  if (!event.target.closest("#resetProductFilters")) return;
  state.petType = "all";
  state.category = "全部食品";
  state.query = "";
  productSearch.value = "";
  renderFilters();
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
recommendationGrid.addEventListener("click", event => {
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

reviewForm.addEventListener("submit", event => {
  event.preventDefault();
  const user = currentUser();
  const product = getProduct(state.selectedId);
  if (!user || !product) return;

  const textValue = document.querySelector("#reviewText").value.trim();
  const rating = Number(document.querySelector("#reviewRating").value);
  const error = document.querySelector("#reviewError");
  if (textValue.length < 4) {
    error.textContent = "评价至少写 4 个字。";
    return;
  }

  const reviews = getLocalReviews();
  const existingIndex = reviews.findIndex(review => review.productId === product.id && review.userId === user.id);
  const review = {
    productId: product.id,
    userId: user.id,
    userName: user.name,
    rating,
    text: textValue,
    date: new Date().toISOString().slice(0, 10)
  };
  if (existingIndex >= 0) reviews[existingIndex] = review;
  else reviews.push(review);
  saveLocalReviews(reviews);
  renderProductReviews(product);
  renderProducts();
  renderRecommendations();
  showToast(existingIndex >= 0 ? "评价已更新" : "感谢你的评价");
});
document.querySelector("#detailAdd").addEventListener("click", () => {
  if (state.selectedId) addToCart(state.selectedId);
});

["#openCart", "#heroCart"].forEach(selector => {
  document.querySelector(selector).addEventListener("click", () => openOverlay("cartOverlay"));
});

mobileCartBar.addEventListener("click", () => openOverlay("cartOverlay"));

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

async function loadRemoteProducts() {
  try {
    const response = await fetch("products.json?v=" + Date.now(), { cache: "no-store" });
    if (!response.ok) throw new Error("商品数据读取失败（" + response.status + "）");
    const publishedProducts = await response.json();
    if (!Array.isArray(publishedProducts) || !publishedProducts.length) return;

    products = publishedProducts
      .filter(product => product.isActive !== false)
      .sort((first, second) => (first.sortOrder || 0) - (second.sortOrder || 0));

    publishedProducts.forEach(product => {
      reviewMeta[product.id] = {
        rating: Number(product.rating || 5),
        count: Number(product.reviewCount || 0),
        quote: product.reviewQuote || "食材清楚，毛孩子吃得很开心。"
      };
    });
  } catch (error) {
    console.warn("GitHub 商品数据读取失败，已使用本地备用商品。", error);
  }
}
async function initializeStorefront() {
  await loadRemoteProducts();
  renderFilters();
  renderBestsellers();
  renderProducts();
  renderCart();
  renderAccount();
  renderAdminEntry();
  renderRecommendations();

  if (new URLSearchParams(location.search).get("checkout") === "1" && state.cart.size) {
    beginCheckout();
  }
}

window.addEventListener("pageshow", renderAdminEntry);
initializeStorefront();