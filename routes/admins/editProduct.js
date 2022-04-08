const express = require('express');

const { postAdminsEditProduct } = require('../../controllers/admins');

const router = express.Router();

router.post('/admins/edit-product', postAdminsEditProduct);

module.exports = router;
