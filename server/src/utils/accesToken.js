import jwt from "jsonwebtoken";
import { config as dotenv } from "dotenv";

dotenv();
const secretToken = process.env.SECRET_TOKEN;

export const createAccesToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secretToken, { expiresIn: "1d" }, (err, token) => {
      if (err) return reject(err);

      return resolve(token);
    });
  });
};
