import Staff from "../models/StaffMembers.js";
import bcrypt from "bcrypt"

const staffMemberController = {
  // create: async (req, res) => {
  //   try {
  //     const staffMember = await Staff.create(req.body);
  //     res.json(staffMember);
  //   } catch (error) {
  //     res.status(500).json(error);
  //   }
  // },
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
      console.log(err);
      return res.json(err);
    }
  },
};

export default staffMemberController;
