import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import userRouter from "./routes/user.routes.js";
import rawFood from "./routes/RawFoodMaterial.routes.js";
import adminRouter from "./routes/admin.routes.js";
import staff from "./routes/staffmember.routes.js";
import productRoutes from "./routes/addmenu.routes.js";
import multer from "multer";
import staffMemberController from "./controllers/staffmember.controllers.js";
import path from "path";
const upload = multer({ dest: path.join( "/Image") });

connect("mongodb+srv://shreyashamrutkar138:O59vIdaw6YO6jsQy@cluster0.ddlpdfz.mongodb.net/canteen");
// connect("mongodb://0.0.0.0:27017/canteen");

const app = express();

app.use(json());
app.use(cors());

app.use("/users", userRouter);
app.use("/owner", rawFood);
app.use("/admin", adminRouter);
app.use("/staff", staff);
app.post(
  "/staff/setmenu",
  upload.single("image"),
  staffMemberController.setMenu
);

app.use("/product", productRoutes);

app.listen(3001, () => {
  console.log("server is running");
});
