const express = require('express');

const { getAdminsAddProduct } = require('../../controllers/admins');

const router = express.Router();

router.get('/admins/add-product', getAdminsAddProduct);

module.exports = router;
