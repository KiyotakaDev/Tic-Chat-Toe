import app, { server } from "./app.js";

const PORT = app.get("port");

server.listen(PORT);
console.log(`>> Server on port: ${PORT} <<`);
