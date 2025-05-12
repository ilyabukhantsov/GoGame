let currentUser = null;

function showRegister() {
  document.getElementById("auth-form").innerHTML = `
    <h2>Register</h2>
    <input type="text" id="reg-username" placeholder="Username" />
    <input type="password" id="reg-password" placeholder="Password" />
    <button onclick="register()">Register</button>
    <p class="link" onclick="showLogin()">Already have an account?</p>
  `;
}

function showLogin() {
  document.getElementById("auth-form").innerHTML = `
    <h2>Login</h2>
    <input type="text" id="login-username" placeholder="Username" />
    <input type="password" id="login-password" placeholder="Password" />
    <button onclick="login()">Login</button>
    <p class="link" onclick="showRegister()">Don't have an account?</p>
  `;
}

function register() {
  const username = document.getElementById("reg-username").value;
  const password = document.getElementById("reg-password").value;
  if (username && password) {
    currentUser = username;
    alert(`Registered as: ${username}`);
    updateUserInfo();
  } else {
    alert("Please enter both username and password");
  }
}

function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  if (username && password) {
    currentUser = username;
    alert(`Logged in as: ${username}`);
    updateUserInfo();
  } else {
    alert("Please enter both username and password");
  }
}

function updateUserInfo() {
  document.getElementById(
    "user-info"
  ).textContent = `Logged in as: ${currentUser}`;
}

function createLobby() {
  if (!currentUser) return alert("Please log in first!");
  const lobbyId = Math.random().toString(36).substr(2, 6).toUpperCase();
  alert(`Lobby created: ${lobbyId}`);
}

function joinLobby() {
  if (!currentUser) return alert("Please log in first!");
  const lobbyId = document.getElementById("lobby-id").value.trim();
  if (lobbyId) {
    alert(`Joining lobby: ${lobbyId}`);
  } else {
    alert("Enter a lobby ID");
  }
}

// Показываем форму логина по умолчанию
showLogin();
