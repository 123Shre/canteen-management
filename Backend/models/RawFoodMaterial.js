import { Schema, model } from 'mongoose';

const RawFoodMaterialSchema = new Schema({
  name: String,
  quantity: Number,
});

const RawFoodMaterial = model('RawFoodMaterial', RawFoodMaterialSchema);

export default RawFoodMaterial;