import { Router } from "express";
import userController from "../controllers/user.controllers.js";

const router = Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/getmenu", userController.getMenu);

export default router;
