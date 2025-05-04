// src/ws/wsServer.js

const WebSocket = require("ws");

function setupWebSocket(wss) {
  wss.on("connection", (ws) => {
    console.log("A client connected");

    ws.on("message", (message) => {
      console.log("received: %s", message);
      // Тут можешь обработать логику игры, ходов и т.п.
      ws.send("Hello from server");
    });

    ws.on("close", () => {
      console.log("A client disconnected");
    });
  });
}

module.exports = setupWebSocket;
