// Importing User model
import User from "../models/auth.model.js";
import bcryptjs from "bcryptjs";

// Creating register controller
export const register = async (req, res) => {
  try {
    // Deconstruction of req.body
    const { username, email, password } = req.body;

    // Validating if the user doesn't exist already
    const userFound = await User.findOne({ email });
    if (userFound) return res.status(409).json(["The email is already in use"]);

    // Creating a passwordhash
    const passwordHash = await bcryptjs.hash(password, 12);

    // Creting new user with User model and saving it
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });
    const userSaved = await newUser.save();

    // Returning user data
    return res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
