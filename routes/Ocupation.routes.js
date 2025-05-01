
const express = require('express');
const router = express.Router();
const Ocupation = require('../models/Ocupation.model');




router.get('/', async (req, res) => {
    try {
      const rooms = await Ocupation.findAll();
      res.json(rooms);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las rooms ' + error.message });
    }
  });

router.get('/range', async (req, res) => {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
        return res.status(400).json({ error: 'startDate and endDate are required' });
    }

    try {
        const ocupations = await Ocupation.findAll({
            where: {
                date: {
                    [Op.between]: [new Date(startDate), new Date(endDate)]
                }
            }
        });
        res.json(ocupations);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las ocupaciones ' + error.message });
    }
});