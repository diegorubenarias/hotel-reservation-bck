const express = require('express');
const router = express.Router();
const usuarioCtrl = require('../controllers/usuarios.controller');

router.post('/register', usuarioCtrl.register);
router.post('/login', usuarioCtrl.login);

module.exports = router;