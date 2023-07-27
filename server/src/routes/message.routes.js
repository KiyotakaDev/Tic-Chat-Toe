import { Router } from "express";
import {
  createMessage,
  getMessages,
  getMessageByKeyword,
  updateMessage,
  deleteMessage,
} from "../controllers/message.controller.js";

import { authRequired } from "../middlewares/validateAuth.js";

const router = Router();

router.post("/messages", authRequired, createMessage);
router.get("/messages", authRequired, getMessages);
router.get("/messages/search/:keyword?", authRequired, getMessageByKeyword);
router.put("/messages/:messageId", authRequired, updateMessage);
router.delete("/messages/:messageId", authRequired, deleteMessage);

export default router;
