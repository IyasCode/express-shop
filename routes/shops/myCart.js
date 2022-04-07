const express = require('express');

const { getShopsMyCart, postShopsMyCart, postShopsMyCartDelete } = require('../../controllers/shops');

const router = express.Router();

router.get('/my-cart', getShopsMyCart);
router.post('/my-cart/delete', postShopsMyCartDelete);
router.post('/my-cart/:productId', postShopsMyCart);

module.exports = router;
