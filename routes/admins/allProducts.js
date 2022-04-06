const express = require('express');

const { getAdminsAllProducts, postAdminsDeleteProduct } = require('../../controllers/admins');

const router = express.Router();

router.get('/admins/all-products', getAdminsAllProducts);

router.post('/admins/delete-product', postAdminsDeleteProduct);

module.exports = router;
