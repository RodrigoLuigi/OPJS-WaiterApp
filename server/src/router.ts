import path from 'path';
import multer from 'multer';
import crypto from 'crypto';

import { Router } from 'express';

import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { deleteOrder } from './app/useCases/orders/deleteOrder';
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';
import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { deleteCategory } from './app/useCases/categories/deleteCategory';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';

export const router = Router();

// Disk Storage
const UPLOADS_FOLDER = path.resolve(__dirname, '..', 'uploads');

const upload = multer({
  storage: multer.diskStorage({
    destination(request, file, callback) {
      callback(null, UPLOADS_FOLDER);
    },
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex');
      const fileName = `${fileHash}-${file.originalname}`;

      callback(null, fileName);
    },
  }),
});

// List categories
router.get('/categories', listCategories);

// Create categories
router.post('/categories', createCategory);

// Delete categories
router.delete('/categories/:categoryId', deleteCategory);

// List products
router.get('/products', listProducts);

// Create product
router.post('/products', upload.single('image'), createProduct);

// Get products by category
router.get('/categories/:categoryId/products', listProductsByCategory);

// List orders
router.get('/orders', listOrders);

// Create order
router.post('/orders', createOrder);

// Change order status
router.patch('/orders/:orderId', changeOrderStatus);

// Delete/cancel order
router.delete('/orders/:orderId', deleteOrder);
