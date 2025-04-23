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
        type: DataTypes.ENUM('executive', 'studio', 'loft suite', 'family comfort'),
        allowNull: false,
    },
}, {
    tableName: 'rooms', // table name in database
    timestamps: true, // Adds createdAt and updatedAt fields
});

module.exports = Room;