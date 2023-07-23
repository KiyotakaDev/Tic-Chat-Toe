import { Schema, model } from "mongoose";

const messageModel = new Schema(
  {
    message: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Message", messageModel);
