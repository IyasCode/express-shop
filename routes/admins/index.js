const express = require('express');

const { getAdminsIndex, postAdminsIndex } = require('../../controllers/admins');

const router = express.Router();

router.get('/admins', getAdminsIndex);

router.post('/admins', postAdminsIndex);

module.exports = router;
