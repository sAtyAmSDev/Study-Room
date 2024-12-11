import { Router } from "express";
import { MrBotChat, GigaScanify } from "../Controller/mrbot.Controller.js";
import { MrBotmiddle, upload } from "../middleware/mrbot.middleware.js";

const router = Router();

router.route("/chat").post(MrBotmiddle, MrBotChat);
// upload.single("Photo")
router.route("/image").post(MrBotmiddle, upload.single("Photo"), GigaScanify);
export default router;
