import express from "express";
import { checkLogin, login, register } from "../controller/auth.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.get("/checkLogin", verifyToken, checkLogin)

// router.post("/logout", logout)

export default router