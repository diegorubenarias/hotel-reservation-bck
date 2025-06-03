const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/facturas.controller');

router.post('/', ctrl.crearFactura);

module.exports = router;