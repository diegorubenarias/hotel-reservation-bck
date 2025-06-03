const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Limpieza = sequelize.define('Limpieza', {
  fecha: DataTypes.DATE,
  costo: DataTypes.FLOAT,
  observaciones: DataTypes.TEXT
});

module.exports = Limpieza;