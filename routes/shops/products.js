const express = require('express');

const { getShopsProducts } = require('../../controllers/shops');

const router = express.Router();

router.get('/products', getShopsProducts);

module.exports = router;







