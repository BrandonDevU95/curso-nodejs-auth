'use strict';

const { UserSchema, USER_TABLE } = require('./../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(USER_TABLE, 'role', UserSchema.role); // Este método agrega una columna a la tabla en la base de datos con el nombre y el esquema que le pasamos
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(USER_TABLE, 'role'); // Este método elimina una columna de la tabla en la base de datos con el nombre que le pasamos
  },
};
