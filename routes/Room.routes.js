
const express = require('express');
const router = express.Router();
const User = require('../models/Room.model');
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

module.exports = router;