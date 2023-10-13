import { Router } from "express";
import rawFoodMaterialController from "../controllers/rawfoodmaterial.controllers.js";

const router = Router();

router.post("/rawFoodMaterials", rawFoodMaterialController.create);
router.post("/viewRawFood", rawFoodMaterialController.viewRawFood);

export default router;
