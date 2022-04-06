const express = require('express');

const { getAdminsAllProducts } = require('../../controllers/admins');

const router = express.Router();

router.get('/admins/all-products', getAdminsAllProducts);

module.exports = router;
