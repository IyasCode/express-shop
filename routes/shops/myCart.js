const express = require('express');

const { getShopsMyCart, postShopsMyCart } = require('../../controllers/shops');

const router = express.Router();

router.get('/my-cart', getShopsMyCart);
router.post('/my-cart/:productId', postShopsMyCart);

module.exports = router;
