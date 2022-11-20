import { Router } from 'express';

export const router = Router();

// List categories
router.get('/categories', (request, response) => {
  response.send('ok');
});

// Create categories
router.post('/categories', (request, response) => {
  response.send('ok');
});

// Delete categories
router.delete('/categories/:categoryId', (request, response) => {
  response.send('ok');
});

// List products
router.get('/products', (request, response) => {
  response.send('ok');
});

// Create product
router.post('/products', (request, response) => {
  response.send('ok');
});

// Get products by category
router.get('/categories/:categoryId/products', (request, response) => {
  response.send('ok');
});

// List orders
router.get('/orders', (request, response) => {
  response.send('ok');
});

// Create order
router.post('/orders', (request, response) => {
  response.send('ok');
});

// Change order status
router.patch('/orders/:orderId', (request, response) => {
  response.send('ok');
});

// Delete/cancel order
router.delete('/orders/:orderId', (request, response) => {
  response.send('ok');
});
