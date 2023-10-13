import { Router } from "express";
import staffMemberController from "../controllers/staffmember.controllers.js";

const router = Router();

router.post("/viewrawfood", staffMemberController.viewRawFood);
router.post("/loginstaff", staffMemberController.login);

export default router;
