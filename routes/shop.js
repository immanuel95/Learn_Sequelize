const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/products', shopController.getProducts);

router.post('/add-product', shopController.addProduct);

router.post('/update-product', shopController.editProduct);

router.post('/delete-product', shopController.deleteProduct);

module.exports = router;
