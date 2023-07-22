import app, { server } from "./app.js";
import { connectDB } from "./db.js";

// Gettin port
const PORT = app.get("port");

// Setting server logs
connectDB();
server.listen(PORT);
console.log(`>> Server on port: ${PORT} <<`);
