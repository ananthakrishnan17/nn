const express = require('express');
const { getProducts, newProduct, getSingleProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/authenticate');

// Public routes
router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);

// Admin routes
router.route('/product/new').post(isAuthenticatedUser, authorizeRoles('admin'), newProduct);
router.route('/product/:id')
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);

module.exports = router;
