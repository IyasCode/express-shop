const express = require('express');

const { getShopsProductDetail } = require('../../controllers/shops');

const router = express.Router();

router.get('/products/:productId', getShopsProductDetail);

module.exports = router;
