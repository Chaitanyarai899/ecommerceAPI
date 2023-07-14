const express = require('express');
const router = express.Router();
const webControllers = require('./webcontrollers');

// Get all products
router.get('/listproducts', webControllers.getAllProducts);

// Create a new product
router.post('/addproduct', webControllers.createProduct);

// Update a product
router.put('/updateproduct', webControllers.updateProduct);

// Delete a product
router.delete('/deleteproduct', webControllers.deleteProduct);

module.exports = router;
