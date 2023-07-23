import { boolean } from "zod";
import Message from "../models/message.model.js";

// Create message controller
export const createMessage = async (req, res) => {
  try {
    // Deconstructing data
    const { message, date } = req.body;

    // Using Message model to save message
    const newMessage = new Message({
      message,
      date,
      user: req.user.id
    });
    // Saving the message
    const messageSaved = await newMessage.save();

    // Returning the message if succesfull
    return res.json(messageSaved);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Get message controller
export const getMessages = async (req, res) => {
  try {
    // Getting all messages
    const messages = await Message.find({ user: req.user.id }).populate("user");

    // Returning messages
    return res.json(messages);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Get message by keyword controller
export const getMessageByKeyword = async (req, res) => {
  try {
    // Deconstructing req.params
    const { keyword } = req.params
    // Setting up defaultKeword to an empty string
    const defaultKeyword = ""
    // if keyword have something reutnr keyword else defaultKeyword
    const searchKeyword = keyword || defaultKeyword
    // Checking if the keyword length is < 3 characters
    if (searchKeyword.length < 3) {
      // Returning error if not
      return res.status(400).json(["Write at least 3 charcters"]);
    }

    // Searching in Message model (Message.find) the message by keyword
    const message = await Message.find({
      // model: { search: keyword, options: insensitive between uppercase and lowercase }
      message: { $regex: searchKeyword, $options: "i" },
      user: req.user.id
    }).populate("user");

    // isEmpty == boolean(false || true). if [] && is empty = true
    const isEmpty = Array.isArray(message) && message.length === 0;
    if (isEmpty) return res.status(404).json(["Message not found"])
    // Else = return res.json(message)
    return res.json(message);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Update message controller
export const updateMessage = async (req, res) => {
  try {
    const message = await Message.findByIdAndUpdate(
      req.params.messageId,
      req.body,
      {
        new: true,
      }
    );
    if (!message) return res.status(404).json(["Message not found"]);
    return res.json(message);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Delete message controller
export const deleteMessage = async (req, res) => {
  try {
    // Searching by id
    const message = await Message.findByIdAndDelete(req.params.messageId);
    if (!message) return res.status(404).json(["Message not found"]);
    // Ok but not returning
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
