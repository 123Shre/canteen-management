import { Router } from "express";
import staffMemberController from "../controllers/staffmember.controllers.js";
import multer from "multer";
const upload =multer({dest:'/Image/image/'})

const router = Router();

router.post("/viewrawfood", staffMemberController.viewRawFood);
router.post("/loginstaff", staffMemberController.login);
router.post("/setmenu",upload.single('image'),staffMemberController.setMenu);
router.post("/viewmenu",staffMemberController.viewMenu);

export default router;
