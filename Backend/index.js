import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import userRouter from "./routes/user.routes.js";
import rawFood from "./routes/RawFoodMaterial.routes.js";
import adminRouter from "./routes/admin.routes.js";
import staff from "./routes/staffmember.routes.js";

connect("mongodb://0.0.0.0:27017/canteen");

const app = express();

app.use(json());
app.use(cors());

app.use("/users", userRouter);
app.use("/owner", rawFood);
app.use("/admin", adminRouter);
app.use("/staff", staff);

app.listen(3001, () => {
  console.log("server is running");
});
