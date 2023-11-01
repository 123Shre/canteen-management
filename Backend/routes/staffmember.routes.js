import { Router } from "express";
import staffMemberController from "../controllers/staffmember.controllers.js";
import { upload } from "../middleware/upload.js";
const router = Router();

router.post("/viewrawfood", staffMemberController.viewRawFood);
router.post("/loginstaff", staffMemberController.login);
router.post("/setmenu", upload.single("productPicture"), staffMemberController.setMenu);
router.post("/viewmenu", staffMemberController.viewMenu);

router.post("/viewstaff", staffMemberController.getAllStaffMembers);
export default router;
