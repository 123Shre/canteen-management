import RawFoodMaterial from "../models/RawFoodMaterial.js";

const rawFoodMaterialController = {
  create: async (req, res) => {
    try {
      const rawFoodMaterial = await RawFoodMaterial.create(req.body);
      res.json(rawFoodMaterial);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  viewRawFood: async (req, res) => {
    try {
      const rawFoodMaterial = await RawFoodMaterial.find();
      if (!rawFoodMaterial) {
        res.send("No data found");
      } else {
        res.json(rawFoodMaterial);
      }
    } catch (err) {
      console.log("Error", err);
    }
  },
};

export default rawFoodMaterialController;
