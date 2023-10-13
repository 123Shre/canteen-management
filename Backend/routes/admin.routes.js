import { Router } from "express";
import adminController from "../controllers/admin.controllers.js";
import staffMemberController from "../controllers/staffmember.controllers.js";

const router = Router();

router.post("/register", adminController.register);
router.post("/login", adminController.login);
router.post("/registerStaff", staffMemberController.registerStaff);

export default router;
