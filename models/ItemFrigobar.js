const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ItemFrigobar = sequelize.define('ItemFrigobar', {
  nombre: DataTypes.STRING,
  precio: DataTypes.FLOAT,
  stock: DataTypes.INTEGER
});

module.exports = ItemFrigobar;