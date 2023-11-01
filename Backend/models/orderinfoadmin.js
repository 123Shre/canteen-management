import { Schema } from "mongoose";
const productInfoSchema=new Schema({
    order_ID:Number,
    Total_Bill:Number,
})
const ProductInfo = model("OrderinfoAdmin", productInfoSchema);
export default ProductInfo;