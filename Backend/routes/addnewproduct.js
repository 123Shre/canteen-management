import multer from "multer";
import path from "path";
import fs from "fs/promises";
import Menu from "../models/Menu";
import connectDB from "@/DB/db";
import { verifyToken } from "@/lib/jwtMiddleware";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads"); // Define the directory where uploaded files will be stored
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    const filename = "productPicture-" + uniqueSuffix + ext;
    // Save the relative path to the image in the database
    req.relativeImagePath = "uploads/" + filename;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

export const config = {
  api: {
    bodyParser: false, // We handle parsing ourselves using multer
  },
};

export default async (req, res) => {
  try {
    await upload.single("productPicture")(req, res, async (err) => {
      if (err) {
        console.error("File upload failed:", err);
        return res
          .status(400)
          .json({ success: false, error: "File upload failed" });
      }

      // Access form fields and uploaded file
      const { name, quantity, price, category } = req.body;
      const productPicture = req.relativeImagePath;
      //await verifyToken();
      await connectDB();
      //console.log(req);

      //console.log(productPicture, "hello");

      if (productPicture == undefined) {
        res.status(405).json({ message: "failed to save product picture" });
      }
      const saveMenu = await Menu.create({
        name,
        quantity,
        price,
        category,
        productPicture,
      });

      // console.log(saveProduct);

      if (saveMenu.name) {
        res
          .status(200)
          .json({ status: "ok", message: "product added sucessfully" });
      } else {
        res.status(405).json({ message: "failed to add the product" });
      }

      // Send a response back to the client
    });
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ success: false, error: "An error occurred" });
  }
};
