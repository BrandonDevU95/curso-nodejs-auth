const { Sequelize } = require('sequelize');
const setupModels = require('../db/models');
const { development } = require('../db/config');

const sequelize = new Sequelize(development.url, {
  dialect: development.dialect,
  logging: development.logging,
});

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize; // Exporta sequelize directamente
