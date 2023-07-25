// Importing message controllers
import {
  createMessage,
  getMessages,
  getMessageByKeyword,
  updateMessage,
  deleteMessage,
} from "../controllers/message.controller.js";

// Basic socket communication
const chatSocket = (io) => {
  io.on("connect", (socket) => {
    console.log("Client connected", socket.id);

    // Assigning id for user when registered or logged
    socket.on("setUserId", (userId) => {
      socket.userId = userId
    })

    socket.on('sendmessage', async ({ message, date }) => {
      try {
        // Creating the message
        const newMessage = await createMessage({
          message,
          date,
          userId: socket.userId
        })
        // Sending message
        io.emit("recievedMessage", newMessage)
      } catch (error) {
        console.error("Saving message error", error);
      }
    })
  });
};

export default chatSocket;
