import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, requred: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  productPicture: {
    type: String, 
    required: true,
  },
});
const Menu = mongoose.model("Menu", MenuSchema);
export default Menu;