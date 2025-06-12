const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Habitacion = sequelize.define('Habitacion', {
  numero: DataTypes.STRING,
  tipo: DataTypes.STRING,
  precioPorNoche: DataTypes.FLOAT,
  descripcion: DataTypes.TEXT,
  disponible: DataTypes.BOOLEAN,
  reservas: [ {
    type: DataTypes.INTEGER,
    references: {
      model: 'Reservas', // Nombre de la tabla de reservas
      key: 'id'
    }
  }]
});

module.exports = Habitacion;