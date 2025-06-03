const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ConsumoFrigobar = sequelize.define('ConsumoFrigobar', {
  cantidad: DataTypes.INTEGER,
  fecha: DataTypes.DATE
});

module.exports = ConsumoFrigobar;