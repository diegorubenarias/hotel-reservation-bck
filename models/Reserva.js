const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Reserva = sequelize.define('Reserva', {
  fechaInicio: DataTypes.DATEONLY,
  fechaFin: DataTypes.DATEONLY,
  estado: DataTypes.ENUM('pendiente', 'confirmada', 'cancelada'),
  total: DataTypes.FLOAT,
  cantidadPersonas: DataTypes.INTEGER,
  nombreCliente: DataTypes.STRING,
});

module.exports = Reserva;