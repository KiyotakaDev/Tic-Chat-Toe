import { Router } from "express";
import { login, logout, profile, register } from "../controllers/auth.controller.js";

import { authRequired } from "../middlewares/validateAuth.js";

const router = Router();

// Setting routing
router.post("/register", register);
router.post("/login", login);
router.get("/profile", authRequired, profile);
router.post("/logout", logout);

export default router;
