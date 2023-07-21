import express from "express";
import http from "http";
import { Server as SocketServer } from "socket.io";

const app = express();
app.set("port", 3000);

export const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: "http://localhost:425",
  },
});

io.on("connect", (socket) => {
  socket.emit("ping", { message: "ping" });
  socket.on("pong", (data) => {
    console.log(data);
  });
});

export default app;
