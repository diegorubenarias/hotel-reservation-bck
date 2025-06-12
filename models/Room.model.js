const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust the path as needed

const Room = sequelize.define('Room', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    roomNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isOccupied: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    type: {
        type: DataTypes.STRING, //DataTypes.ENUM('executive', 'studio', 'loft suite', 'family comfort'),
        allowNull: false,
    },
    building: {
        type: DataTypes.ENUM('beHause', 'dessau6', 'dessau4', 'miro3'),
        allowNull: false,
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    reserva: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Reservas', // Name of the reservations table
            key: 'id'
        },
        allowNull: true, // Allow null if no reservation is linked
    }
    
}, {
    tableName: 'rooms', // table name in database
    timestamps: true, // Adds createdAt and updatedAt fields
});

module.exports = Room;