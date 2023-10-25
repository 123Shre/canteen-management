// routes/productRoutes.js
import { Router } from 'express';
const router = Router();
import { createProduct } from '../controllers/menu.controllers.js';

// POST request to create a new product
router.post('/addNewProduct', createProduct);

export default router;
