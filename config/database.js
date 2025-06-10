
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('railway', 'root', 'AttJFGFtRXjAnrrsEATwYpTjHPNLZwWT', {
    host: 'tramway.proxy.rlwy.net',
    dialect: 'mysql',
    port: 10907, // Ensure the port is correct
    logging: false // Disable logging if not needed
  });
  
  module.exports = sequelize;
  