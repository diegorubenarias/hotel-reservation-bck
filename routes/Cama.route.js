const express = require('express');
const router = express.Router();
const Cama = require('../models/Cama.model');


router.get('/', async (req, res) => {
  try {
    const camas = await Cama.findAll();
    res.json(camas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las categorias' });
  }
});


router.post('/', async (req, res) => {
  try {
    const { code, description } = req.body;
    const camas = await Cama.create({ code, description });
    res.status(201).json(camas);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la categoria' });
  }
});


router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const cama = await Cama.findByPk(id);
  
      if (!cama) {
        return res.status(404).json({ error: 'cama no encontrada' });
      }
  
      res.json(cama); 
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la categoria' });
    }
  });
  

module.exports = router;
