const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/frigobar.controller');

router.post('/', ctrl.agregarItem);

module.exports = router;