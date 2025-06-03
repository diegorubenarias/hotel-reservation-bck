const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/reservas.controller');

router.post('/', ctrl.crearReserva);
router.get('/', ctrl.obtenerReservas);

module.exports = router;