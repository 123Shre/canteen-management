import { Schema } from "mongoose";

const AddToCartSchema = new Schema({
  userId: String,
  productId: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  productPicture: { type: String, required: true },
});
const AddToCart = mongoose.model("AddToCart", AddToCartSchema);
export default AddToCart;
