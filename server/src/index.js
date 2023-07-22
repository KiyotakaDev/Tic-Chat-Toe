import app, { server } from "./app.js";
import { connectDB } from "./db.js";

const PORT = app.get("port");

connectDB();
server.listen(PORT);
console.log(`>> Server on port: ${PORT} <<`);
