const express = require('express');

const { getShopsIndex, getShopsRedirect } = require('../../controllers/shops');

const router = express.Router();


router.get('/home', getShopsIndex);
router.get('/', getShopsRedirect);

module.exports = router;
