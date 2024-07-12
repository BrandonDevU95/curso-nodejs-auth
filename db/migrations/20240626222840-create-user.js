'use strict';

const { UserSchema, USER_TABLE } = require('./../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema); // Este método crea la tabla en la base de datos con el nombre y el esquema que le pasamos
  },

  async down(queryInterface) {
    await queryInterface.dropTable(USER_TABLE); // Este método elimina la tabla de la base de datos
  },
};
