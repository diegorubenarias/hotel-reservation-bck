const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/limpieza.controller');

router.post('/', ctrl.registrarLimpieza);

module.exports = router;