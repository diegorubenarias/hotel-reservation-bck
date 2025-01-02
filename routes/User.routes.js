
const express = require('express');
const router = express.Router();
const User = require('../models/User.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Endpoint para registro
router.post('/register', async (req, res) => {
    const { email, password, role } = req.body;
    try {
        const user = await User.create({ email, password, role });
        const payload = { id: user.email, role: user.role };
        const token = jwt.sign(payload, 'secret_key', { expiresIn: '1h' });  // Usa una secret_key segura
        
        res.status(201).json({ message: 'Usuario registrado exitosamente!', token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});



// Endpoint para login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ error: 'Usuario no encontrado' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Contraseña incorrecta' });
        }

         const payload = { id: user.id, role: user.role };
        const token = jwt.sign(payload, 'secret_key', { expiresIn: '1h' });
        

        res.json({ message: 'Login exitoso', token, role: user.role });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;