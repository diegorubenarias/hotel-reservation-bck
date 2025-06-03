const Factura = require('../models/Factura');

exports.crearFactura = async (req, res) => {
  try {
    const factura = await Factura.create(req.body);
    res.status(201).json(factura);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};