const STORAGE_KEYS = {
  users: "heye_users_v1",
  session: "heye_session_v1"
};

const authView = document.querySelector("#authView");
const profileView = document.querySelector("#profileView");
const loginForm = document.querySelector("#loginForm");
const registerForm = document.querySelector("#registerForm");
const loginTab = document.querySelector("#loginTab");
const registerTab = document.querySelector("#registerTab");
const toast = document.querySelector("#toast");

function getUsers() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.users)) || []; }
  catch { return []; }
}

function saveUsers(users) {
  localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users));
}

function digestPassword(password) {
  let hash = 2166136261;
  for (const character of password) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(36);
}

function currentUser() {
  const id = localStorage.getItem(STORAGE_KEYS.session);
  return getUsers().find(user => user.id === id) || null;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

function switchMode(mode) {
  const isLogin = mode === "login";
  loginForm.hidden = !isLogin;
  registerForm.hidden = isLogin;
  loginTab.classList.toggle("active", isLogin);
  registerTab.classList.toggle("active", !isLogin);
  loginTab.setAttribute("aria-selected", isLogin);
  registerTab.setAttribute("aria-selected", !isLogin);
}

function redirectAfterAuth() {
  const params = new URLSearchParams(location.search);
  location.href = params.get("redirect") === "checkout" ? "index.html?checkout=1" : "index.html";
}

function renderProfile() {
  const user = currentUser();
  authView.hidden = Boolean(user);
  profileView.hidden = !user;
  if (!user) return;

  document.querySelector("#profileAvatar").textContent = user.name.slice(0, 1);
  document.querySelector("#profileName").textContent = user.name;
  document.querySelector("#profilePhone").textContent = user.phone;
  const address = user.address;
  document.querySelector("#savedAddress").innerHTML = address
    ? `<small>默认收货地址</small><strong>${address.recipient} · ${address.phone}</strong><p>${address.region} ${address.detail}</p>`
    : `<small>默认收货地址</small><strong>暂未保存</strong><p>结算时填写后会自动保存到当前账户。</p>`;
}

loginTab.addEventListener("click", () => switchMode("login"));
registerTab.addEventListener("click", () => switchMode("register"));

loginForm.addEventListener("submit", event => {
  event.preventDefault();
  const phone = document.querySelector("#loginPhone").value.trim();
  const password = document.querySelector("#loginPassword").value;
  const user = getUsers().find(item => item.phone === phone && item.passwordDigest === digestPassword(password));
  const error = document.querySelector("#loginError");
  if (!user) {
    error.textContent = "手机号或密码不正确。";
    return;
  }
  error.textContent = "";
  localStorage.setItem(STORAGE_KEYS.session, user.id);
  showToast("登录成功");
  setTimeout(redirectAfterAuth, 450);
});

registerForm.addEventListener("submit", event => {
  event.preventDefault();
  const name = document.querySelector("#registerName").value.trim();
  const phone = document.querySelector("#registerPhone").value.trim();
  const password = document.querySelector("#registerPassword").value;
  const confirm = document.querySelector("#registerConfirm").value;
  const error = document.querySelector("#registerError");
  const users = getUsers();

  if (!/^1\d{10}$/.test(phone)) error.textContent = "请输入有效的 11 位手机号。";
  else if (password.length < 6) error.textContent = "密码至少需要 6 位。";
  else if (password !== confirm) error.textContent = "两次输入的密码不一致。";
  else if (users.some(user => user.phone === phone)) error.textContent = "该手机号已经注册，请直接登录。";
  else {
    const user = { id: `user_${Date.now()}`, name, phone, passwordDigest: digestPassword(password), address: null };
    users.push(user);
    saveUsers(users);
    localStorage.setItem(STORAGE_KEYS.session, user.id);
    error.textContent = "";
    showToast("注册成功");
    setTimeout(redirectAfterAuth, 450);
  }
});

document.querySelector("#logoutButton").addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEYS.session);
  switchMode("login");
  renderProfile();
  showToast("已退出登录");
});

renderProfile();
