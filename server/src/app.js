// Importing server dependencied
import express from "express";
import http from "http";
import { Server as SocketServer } from "socket.io";

// Importing routes
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from './routes/message.routes.js'

import morgan from "morgan";
import cookieParser from "cookie-parser";

// Creating basic server
const app = express();
app.set("port", 3000);

// Using middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser())

// Using prefix "/api"
app.use("/api", authRoutes);
app.use("/api", messageRoutes);

// Creating SocketServer
export const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: "http://localhost:425",
  },
});

// Basic socket communication
io.on("connect", (socket) => {
  socket.emit("ping", { message: "ping" });
  socket.on("pong", (data) => {
    console.log(data);
  });
});

export default app;
