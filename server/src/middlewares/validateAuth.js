import jwt from "jsonwebtoken";
import { config as dotenv } from "dotenv";

dotenv();
const secretToken = process.env.SECRET_TOKEN;

export const authRequired = (req, res, next) => {
  try {
    // Destructuring req.cookies in token
    const { token } = req.cookies;

    // Cheking if token exists
    if (!token) return res.status(400).json(["Invalid credentials"]);
    jwt.verify(token, secretToken, (err, user) => {
      if (err) return res.status(400).json(["Invalid credentials"]);
      // Creating new property in req, assigning user's value (req.propertyName = value)
      return (req.user = user);
    });
    next();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
