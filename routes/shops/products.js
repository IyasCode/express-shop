const express = require('express');

const { getShopsProducts, postShopsProducts } = require('../../controllers/shops');

const router = express.Router();

router.get('/products', getShopsProducts);
router.post('/products', postShopsProducts);

module.exports = router;







