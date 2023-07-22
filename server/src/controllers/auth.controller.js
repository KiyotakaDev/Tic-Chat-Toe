// Importing User model
import User from "../models/auth.model.js";

// Creating register controller
export const register = async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
