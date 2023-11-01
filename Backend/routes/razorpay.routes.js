import { Router } from "express";
const router = Router();
import razorpayController from "../controllers/razorpay.controllers.js";

router.post("/create-order", razorpayController.createOrder);

export default router;
