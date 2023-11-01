import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // token: { type: String, required: true },
});

const userModel = mongoose.model("users", userSchema);
export default userModel;

userModel.prototype.saveToken = async function (token) {
  this.token = token;
  await this.save();
};

// Retrieve the JWT token from the user's document
userModel.prototype.getToken = async function () {
  return this.token;
};
