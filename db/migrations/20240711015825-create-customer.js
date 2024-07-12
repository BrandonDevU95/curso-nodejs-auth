'use strict';

const {
  CustomerSchema,
  CUSTOMER_TABLE,
} = require('./../models/customer.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema); // Este método crea la tabla en la base de datos con el nombre y el esquema que le pasamos
  },

  async down(queryInterface) {
    await queryInterface.dropTable(CUSTOMER_TABLE); // Este método elimina la tabla de la base de datos
  },
};
