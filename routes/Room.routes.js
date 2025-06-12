
const express = require('express');
const router = express.Router();
const Room = require('../models/Room.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Reserva = require('../models/Reserva');




router.get('/', async (req, res) => {
    try {
      const rooms = await Room.findAll({include: {model: Reserva, as: 'reserva'}}); // Assuming futureAllocations is the association name
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

router.get('/availability', async (req, res) => {
  const { startDate, endDate, available } = req.query;

  if (!startDate || !endDate) {
    return res.status(400).json({ error: 'startDate and endDate are required' });
  }

  try {
    const rooms = await Room.findAll({
      include: {
        association: 'futureAllocations', // Assuming this is the association name
        where: {
          [Op.or]: [
            {
              startDate: { [Op.between]: [startDate, endDate] }
            },
            {
              endDate: { [Op.between]: [startDate, endDate] }
            },
            {
              startDate: { [Op.lte]: startDate },
              endDate: { [Op.gte]: endDate }
            }
          ]
        },
        required: available === 'false' // Include only if unavailable when available=false
      }
    });

    if (available === 'true') {
      const availableRooms = rooms.filter(room => room.futureAllocations.length === 0);
      return res.json(availableRooms);
    }

    res.json(rooms);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la disponibilidad de las rooms ' + error.message });
  }
});

router.post('/occupy', async (req, res) => {
  const { roomId, startDate, endDate } = req.body;

  if (!roomId || !startDate || !endDate) {
    return res.status(400).json({ error: 'roomId, startDate, and endDate are required' });
  }

  try {
    const room = await Room.findByPk(roomId);

    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }

    // Assuming `futureAllocations` is a relation and has a model
    const allocation = await room.createFutureAllocation({
      startDate,
      endDate
    });

    res.status(201).json({ message: 'Room marked as occupied', allocation });
  } catch (error) {
    res.status(500).json({ error: 'Error marking room as occupied ' + error.message });
  }
});
module.exports = router;