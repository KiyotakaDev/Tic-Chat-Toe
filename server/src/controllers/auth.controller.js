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

export const login = async (req, res) => {
  try {
    // Deconstructing
    const { email, password } = req.body;

    // Finding user by email
    const userFound = await User.findOne({ email });
    if (!userFound) return res.status(401).json(["Invalid credentials"]);

    // Comparing password
    const isMatch = await bcryptjs.compare(password, userFound.password);
    if (!isMatch) return res.status(401).json(["Invalid credentials"]);

    // Returning user data
    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {}
};
