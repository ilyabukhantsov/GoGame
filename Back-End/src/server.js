//server.js
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRouter");
const setupWebSocket = require("./ws/wsServer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

app.use(express.json());
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  if (req.session.username) {
    res.sendFile(path.join(__dirname, "public", "lobby.html"));
  } else {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  }
});

const server = http.createServer(app);

mongoose
  .connect(uri)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const wss = new WebSocket.Server({ server });
setupWebSocket(wss);

server.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
