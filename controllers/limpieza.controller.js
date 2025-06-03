const Limpieza = require('../models/Limpieza');

exports.registrarLimpieza = async (req, res) => {
  try {
    const limpieza = await Limpieza.create(req.body);
    res.status(201).json(limpieza);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};