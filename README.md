# Course Project: Online Go Game using Pure Node.js

## 📌 Project Description

This course project is a web application for playing the board game **Go** between two players in real time.  
The backend is built using **pure Node.js**, without frameworks like Express, and uses **WebSocket** for real-time communication.

Players can:

- Register and log in
- Join games
- Take turns making moves
- See the opponent’s moves in real time
- Have their game history stored in a database

---

## ⚙️ Technologies Used

- Node.js (no Express)
- WebSocket (`ws`)
- MongoDB (`mongoose`)
- JSON Web Token (`jsonwebtoken`)
- bcryptjs (for password hashing)
- HTML/CSS/JS (frontend with WebSocket client)

---

## 🗂 Project Structure

<pre> 📁 <b>Project Structure</b> go-game-backend/ ├── <b>src/</b> # Main source folder │ ├── <b>server.js</b> # HTTP + WebSocket server │ ├── <b>ws/</b> # WebSocket-related logic │ │ └── <b>wsServer.js</b> # Handles socket connections, messaging, etc. │ ├── <b>models/</b> # Mongoose models │ │ ├── <b>User.js</b> # User schema │ │ └── <b>Game.js</b> # Game state schema │ └── <b>middleware/</b> # (Optional) Auth & utility middleware (e.g. JWT validation) ├── <b>package.json</b> # Project metadata and dependencies ├── <b>.gitignore</b> # Ignored files └── <b>README.md</b> # Project documentation </pre>
