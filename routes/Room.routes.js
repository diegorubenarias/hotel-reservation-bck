
const express = require('express');
const router = express.Router();
const Room = require('../models/Room.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');




router.get('/', async (req, res) => {
    try {
      const rooms = await Room.findAll();
      res.json(rooms);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las rooms ' + error.message });
    }
  });
router.post('/', async (req, res) => {
    const { roomNumber, type, building } = req.body;

    
    try {
        const newRoom = await Room.create({ roomNumber, type, building });
        res.status(201).json(newRoom);
    } catch (error) {
        res.status(500).json({ error: 'Error al insertar la room ' + error.message });
    }
});
module.exports = router;