const express = require('express');
const router = express.Router();

const {getAllProducts, getProductById} = require('../controller/productController')


// GET all products from db
// GET "/api/products"
// ACCESS public
router.get('/', getAllProducts);



// GET product by :id from db
// GET "/api/product/:id"
// ACCESS public
router.get('/:id', getProductById);

module.exports = router;