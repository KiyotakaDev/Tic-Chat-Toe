import { connect } from "mongoose";
import { config as dotenv } from "dotenv";

dotenv();
const dbConnection = process.env.DB_CONNECTION;

export const connectDB = async () => {
  try {
    await connect(dbConnection);
    console.log(">> DB is connected <<");
  } catch (error) {
    console.error(error);
  }
};
