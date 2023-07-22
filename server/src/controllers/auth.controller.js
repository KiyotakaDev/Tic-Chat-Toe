// Importing User model
import User from "../models/auth.model.js";
import bcryptjs from "bcryptjs";
import { createAccesToken } from "../utils/accesToken.js";

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

    // Creating access token
    const token = await createAccesToken({ id: userSaved._id });
    // Assigning token to cookie
    res.cookie("token", token);

    // Returning user data
    return res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Creating login controller
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

    // Creating access token
    const token = await createAccesToken({ id: userFound._id });
    // Assigning token to cookie
    res.cookie("token", token);

    // Returning user data
    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Creating profile controller
export const profile = async (req, res) => {
  try {
    // Checking if the user exists
    const userFound = await User.findById(req.user.id);
    if (!userFound) return res.status(404).json(["User not found"]);

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Creating logout controller
export const logout = async (_, res) => {
  // Setting cookie to ""
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};
