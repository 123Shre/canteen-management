import { Schema, model } from "mongoose";

const AdminInfo = new Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    default: "admin",
  },
});

const adminModel = model("admin-users", AdminInfo);

export default adminModel;
