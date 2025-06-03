const Habitacion = require('../models/Habitacion');

exports.crearHabitacion = async (req, res) => {
  try {
    const habitacion = await Habitacion.create(req.body);
    res.status(201).json(habitacion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.obtenerHabitaciones = async (req, res) => {
  const habitaciones = await Habitacion.findAll();
  res.json(habitaciones);
};