const express = require('express');
const router = express.Router();
const Category = require('../models/Category.model');


router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las categorias' });
  }
});


router.post('/', async (req, res) => {
  try {
    const { code, description } = req.body;
    const category = await Category.create({ code, description });
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la categoria' });
  }
});


router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Categoria.findByPk(id);
  
      if (!category) {
        return res.status(404).json({ error: 'Categoria no encontrada' });
      }
  
      res.json(category); 
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la categoria' });
    }
  });
  

module.exports = router;
