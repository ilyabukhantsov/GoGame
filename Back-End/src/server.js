// src/server.js
const http = require("http");
const WebSocket = require("ws");
const mongoose = require("mongoose");
const setupWebSocket = require("./ws/wsServer"); // Подключение правильно
require("dotenv").config();
const uri = process.env.MONGO_URI;

// Настройка порта и HTTP-сервера
const PORT = 5000;
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("This shit working, funny yea?.");
});

// Подключение к MongoDB
mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ MongoDB connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

// Настройка WebSocket
const wss = new WebSocket.Server({ server });
setupWebSocket(wss); // Здесь вызываем

// Запуск сервера
server.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
