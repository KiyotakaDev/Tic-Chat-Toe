import { createServer } from "http";
import { Server as SocketServer } from "socket.io";
import app from "./app.js";

//Creating basic server
export const server = createServer(app);
// SocketServer
const io = new SocketServer(server, {
  cors: {
    origin: "http://localhost:425",
  },
});

// Importing socket logic
import chatSocket from "./sockets/chat.socket.js";
chatSocket(io);
