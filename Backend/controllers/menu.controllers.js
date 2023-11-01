// controllers/productController.js
import Product from '../models/Product.js';
import multer from 'multer';
import path from 'path';

// Create a new product
export async function createProduct(req, res) {
// console.log(req)
  try {
    const {
      productName,
      productCategory,
      productPrice,
      productQuantity,
    } = req.body;

    // console.log(req.body);


    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, "../Images/images") // Define your file storage directory
      },
      filename: (req, file, cb) => {
        cb(null, file.fieldname+Date.now()+path.extname(file.originalname))
      },
    });
    
    const upload = multer({ storage:storage });
    
    let imagePath = '';
    if (req.file) {
      imagePath = '/' + req.file.filename;
    }

    // You may want to handle the file upload and save the file path here.
    const product = new Product({
      productName:productName,
      productCategory:productCategory,
      productPrice:productPrice,
      productQuantity:productQuantity,
      productPicture: imagePath,
    });

    await product.save();
    res.status(201).json({ status: 'ok', message: 'Product added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Failed to add the product' });
  }
}
