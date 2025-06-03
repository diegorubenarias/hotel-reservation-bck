const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/habitaciones.controller');

router.post('/', ctrl.crearHabitacion);
router.get('/', ctrl.obtenerHabitaciones);

module.exports = router;