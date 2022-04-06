const express = require('express');

const { getAdminsEditProduct } = require('../../controllers/admins');

const router = express.Router();

router.get('/admins/edit-product', getAdminsEditProduct);

module.exports = router;
