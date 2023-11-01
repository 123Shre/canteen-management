import Staff from "../models/StaffMembers.js";
import Menu from "../models/Menu.js";
import bcrypt from "bcrypt";
import Product from "../models/Product.js";

const staffMemberController = {

  getAllStaffMembers: async (req, res) => {
    try {
      const staffMembers = await Staff.find(); // Retrieve all staff members from the database
      res.json(staffMembers); // Respond with the staff members in JSON format
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },

  viewRawFood: async (req, res) => {
    try {
      const staffMember = await Staff.find();
      if (!staffMember) {
        res.send("No data found");
      } else {
        res.json(staffMember);
      }
    } catch (err) {
      console.log("Error", err);
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const staff = await Staff.findOne({ email });
      if (!staff) {
        res.status(404).json("User Not found");
        return;
      }
      //   if (admin.password !== password) {
      if (bcrypt.compare(password, staff.password)) {
        return res.status(404).json("This password is incorrect");
      }
      res.status(200).json("Success");
    } catch (err) {
      res.json(err);
    }
  },

  setMenu: async (req, res) => {
    // console.log(req.body);
    try {
      const { productName, productPrice, selectedCategory, productQuantity } =
        req.body;
      const TodayMenu = await Product.create({
        productName,
        productPrice,
        productCategory: selectedCategory,
        productQuantity,
        productPicture: req.file.filename,
      });
    return res.json({status:"ok",message:"Data added success",data:TodayMenu});
    } catch (error) {
    return res.status(500).json({status:"error",message:"Failed to add product"});
    }
  },

  viewMenu: async (req, res) => {
    try {
      const menu = await Product.find();
      const {
        productName,
        productCategory,
        productPicture,
        productPrice,
        productQuantity,
      } = menu;
      console.log(productPicture,productName)
      if (!menu) {
        res.send("no data");
        // console.log(menu);
      } else {
        res.json(menu);
      }
    } catch (e) {
      alert(e);
    }
  },
  registerStaff: async (req, res) => {
    try {
      const {
        name,
        email,
        phoneNumber,
        address,
        dob,
        gender,
        department,
        startDate,
        password,
      } = req.body;

      const userExist = await Staff.findOne({ email });
      if (userExist) {
        return res.json({
          status: "failed",
          message: "Email already Registered",
        });
      }

      const staff = await Staff.create({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
        dob: dob,
        startDate: startDate,
        gender: gender,
        department: department,
        password: await bcrypt.hash(password, 10),
      });

      return res.json({
        status: "ok",
        message: "Staff registered successfully!",
      });
    } catch (err) {
      alert(err);
      return res.json(err);
    }
  },
};

export default staffMemberController;
