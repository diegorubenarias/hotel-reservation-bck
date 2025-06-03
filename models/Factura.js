const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Factura = sequelize.define('Factura', {
  fecha: DataTypes.DATE,
  total: DataTypes.FLOAT,
  metodoPago: DataTypes.STRING,
  estado: DataTypes.STRING
});

module.exports = Factura;