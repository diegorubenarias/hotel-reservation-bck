const Reserva = require('../models/Reserva');

exports.crearReserva = async (req, res) => {
  try {
    const reserva = await Reserva.create({ ...req.body, UsuarioId: req.user.id });
    res.status(201).json(reserva);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.obtenerReservas = async (req, res) => {
  const reservas = await Reserva.findAll({ where: { UsuarioId: req.user.id } });
  res.json(reservas);
};