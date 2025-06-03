const ItemFrigobar = require('../models/ItemFrigobar');
const ConsumoFrigobar = require('../models/ConsumoFrigobar');

exports.agregarItem = async (req, res) => {
  try {
    const item = await ItemFrigobar.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};