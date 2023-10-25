import Menu from "../models/Menu.js";
import userModel from "../models/User.js";
import bcrypt, { hash } from "bcrypt";

const userController = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      console.log(req.body);
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

      const token = generateToken({ userId: users._id });
      return res.json({
        status: "ok",
        message: "You are successfully Registered",
        accessToken: token,
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
      console.log(user.password);
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      console.log(isPasswordCorrect);
      if (!isPasswordCorrect) {
        return res.json({
          status: "failed",
          message: "Invalid username or password",
        });
      }

      return res.json({ status: "ok", message: "success" });
    } catch (err) {
      res.json({ status: "failed", message: err });
    }
  },
  getMenu: async (req, res) => {
    try {
      // Find all menu items
      const menuItems = await Menu.find();

      // Send the menu items back to the client
      res.json(menuItems);
    } catch (error) {
      // Handle the error
      res.status(500).json(error);
    }
  },
  verifyToken: async (req, res, next) => {
    const accessToken = req.headers['authorization'];

    if (!accessToken) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      const decoded = await jwt.verify(accessToken, require('../config/jwt.config.js').secret);

      req.user = decoded;

      next();
    } catch (error) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  },
};

export default userController;
