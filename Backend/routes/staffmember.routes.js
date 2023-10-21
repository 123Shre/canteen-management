import { Router } from "express";
import staffMemberController from "../controllers/staffmember.controllers.js";

const router = Router();

router.post("/viewrawfood", staffMemberController.viewRawFood);
router.post("/loginstaff", staffMemberController.login);
router.post("/setmenu",staffMemberController.setMenu);

export default router;
