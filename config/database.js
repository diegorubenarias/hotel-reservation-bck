
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('railway', 'root', 'AlJQegmdMJxnfTSBBCMJrSdKsahPWcZI', {
    host: 'junction.proxy.rlwy.net',
    dialect: 'mysql',
    port: 50820, // Ensure the port is correct
    logging: false // Disable logging if not needed
  });
  
  module.exports = sequelize;
  