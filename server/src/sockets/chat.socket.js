// Basic socket communication
const chatSocket = (io) => {
  io.on("connect", (socket) => {
    socket.emit("ping", { message: "ping" });
    socket.on("pong", (data) => {
      console.log(data);
    });
  });
};

export default chatSocket;
