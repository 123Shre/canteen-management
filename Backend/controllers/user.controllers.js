import Menu from "../models/Menu.js";
import userModel from "../models/User.js";
import bcrypt, { hash } from "bcrypt";
import JWT from "jsonwebtoken";
import { createSecretToken } from "../utils/SecretToken.js";

const userController = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      // console.log(req.body);
      const userExist = await userModel.findOne({ email });
      if (userExist) {
        return res.json({
          status: "failed",
          message: "Email already Registered",
        });
      }
      const users = await userModel.create({
        name: name,
        email: email,
        password: await hash(password, 10),
      });

      // const token = createSecretToken(users._id);
      // res.cookie("token", token, {
      //   withCredentials: true,
      //   httpOnly: false,
      // });
      return res.json({
        status: "ok",
        message: "You are successfully Registered",
        // accessToken: token,
        users
      });
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
        return res.json({
          status: "failed",
          message: "The Email does not exist",
        });
      }
      /* 
      if (await bcrypt.compare(password, user.password)) {
        return res.json("the password is incorrect");
      } */
      // console.log(user.password);
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      // console.log(isPasswordCorrect);
      if (!isPasswordCorrect) {
        return res.json({
          status: "failed",
          message: "Invalid username or password",
        });
      }
      /* const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      }); */
      return res.json({
        status: "ok",
        message: "success",
        data: { name: user.name, email: user.email },
        /* token, */
      });
    } catch (err) {
      res.json({ status: "failed", message: err });
    }
  },
  getMenu: async (req, res) => {
    try {
      // Find all menu items
      const menuItems = await Menu.find();
      res.json(menuItems);
    } catch (error) {
      // Handle the error
      res.status(500).json(error);
    }
  },
  verifyToken: async (req, res, next) => {
    const accessToken = req.headers["authorization"];

    if (!accessToken) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      const decoded = await jwt.verify(
        accessToken,
        require("../config/jwt.config.js").secret
      );

      req.user = decoded;

      next();
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  },
};

export default userController;
