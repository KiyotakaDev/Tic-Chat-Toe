import { Router } from "express";
import { login, logout, profile, register } from "../controllers/auth.controller.js";

import { authRequired } from "../middlewares/validateAuth.js";
import { validateSchema } from '../middlewares/validateSchema.js'
import { registerSchema, loginSchema } from '../schemas/auth.schema.js'

const router = Router();

// Setting routing
router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.get("/profile", authRequired, profile);
router.post("/logout", logout);

export default router;
