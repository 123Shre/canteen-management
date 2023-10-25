// models/Product.js
import { Schema, model } from "mongoose";

const productSchema = new Schema({
  productId: Number,
  productName: String,
  productCategory: String,
  productPrice: Number,
  productQuantity: Number,
  productPicture: String, // Store the file path here
});

const Product = model("Product", productSchema);

export default Product;
