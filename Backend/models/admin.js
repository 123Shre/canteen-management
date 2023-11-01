import { Schema, model } from "mongoose";

const AdminInfo = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    default: "admin",
  },
});

const adminModel = model("admin-users", AdminInfo);

export default adminModel;
