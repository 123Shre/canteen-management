import adminModel from "../models/admin.js";
import bcrypt from "bcrypt";

const adminController = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const adminExist = await adminModel.findOne({ email });
      if (adminExist) {
        return res.status(405).json({ message: "Email already Registered" });
      }

      const admin = await userModel.create({
        name: name,
        email: email,
        password: await bcrypt.hash(password, 10),
      });
      return res
        .status(200)
        .json({ message: "You are successfully Registered" });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  },







  
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const admin = await adminModel.findOne({ email });
      if (!admin) {
        res.status(404).json("User Not found");
        return;
      }
      //   if (admin.password !== password) {
      if (bcrypt.compare(password, admin.password)) {
        return res.status(404).json("This password is incorrect");
      }
      res.status(200).json("Success");
    } catch (err) {
      res.json(err);
    }
  },
};

export default adminController;
