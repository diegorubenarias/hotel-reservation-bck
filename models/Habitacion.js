const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Habitacion = sequelize.define('Habitacion', {
  numero: DataTypes.STRING,
  tipo: DataTypes.STRING,
  precioPorNoche: DataTypes.FLOAT,
  descripcion: DataTypes.TEXT,
  disponible: DataTypes.BOOLEAN
});

module.exports = Habitacion;