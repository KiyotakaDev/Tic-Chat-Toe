import app from "./app.js";
import { server } from "./server.js";
import { connectDB } from "./db.js";

// Gettin port
const PORT = app.get("port");

// Setting server logs
connectDB();
server.listen(PORT);
console.log(`>> Server on port: ${PORT} <<`);
