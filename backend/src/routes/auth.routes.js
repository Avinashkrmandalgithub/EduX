import { Router } from "express";
import { getMe, login, logout, register, updateProfile } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", authMiddleware, getMe);
router.put(
  "/update-profile",
  authMiddleware,
  updateProfile
);


export default router;
