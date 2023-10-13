import userModel from "../models/User.js";
import bcrypt, { hash } from "bcrypt";

const userController = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      console.log(req.body);
      const userExist = await userModel.findOne({ email });
      if (userExist) {
        return res.json({status: "failed",  message: "Email already Registered" });
      }

      const users = await userModel.create({
        name: name,
        email: email,
        password: await hash(password, 10),
      });
      return res.json({status: "ok", message: "You are successfully Registered" });
      // console.log(users)
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email });

      //console.log(user);
      if (!user) {
        return res.json({status: "failed", message: "The Email does not exist"});
      }
/* 
      if (await bcrypt.compare(password, user.password)) {
        return res.json("the password is incorrect");
      } */
      console.log(user.password);
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      console.log(isPasswordCorrect);
      if (!isPasswordCorrect) {
        return res.json({status: "failed",message: "Invalid username or password"});
      }

      return res.json({ status: "ok", message: "success" });
    } catch (err) {
      res.json({status: "failed",message: err});
    }
  },
};

export default userController;
