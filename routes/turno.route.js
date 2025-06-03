const express = require('express');
const router = express.Router();
const Turno = require('../models/turnos.model');


router.get('/', async (req, res) => {
  try {
    const turnos = await Turno.findAll();
    res.json(camas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las categorias' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { startTime, endTime } = req.body;
    const turnos = await Turno.create({ startTime, endTime });
    res.status(201).json(turnos);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la categoria' });
  }
}
);

module.exports = router;