import { Router } from "express";
import { register } from "../controllers/auth.controller.js";

const router = Router();

// Setting routing
router.post("/register", register);

export default router;
