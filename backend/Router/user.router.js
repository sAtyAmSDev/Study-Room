import { Router } from "express";
import { registerUser, loginUser, UserProfile } from "../Controller/user.controller.js";
import { isAuth } from "../middleware/ïsAuth.js";
const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/profile").get(isAuth, UserProfile);

export default router;
