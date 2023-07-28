// Importing server dependencies and routes
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import cors from 'cors'

// Creating basic server
const app = express();
app.set("port", 3000);

// Using middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(cors())

// Using prefix "/api"
app.use("/api", authRoutes);
app.use("/api", messageRoutes);

export default app;
