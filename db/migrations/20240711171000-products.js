'use strict';

const { CATEGORY_TABLE, CategorySchema } = require('../models/category.model');
const { PRODUCT_TABLE, ProductSchema } = require('../models/product.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema); // Este método crea la tabla en la base de datos
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema); // Este método crea la tabla en la base de datos
  },

  async down(queryInterface) {
    await queryInterface.dropTable(CATEGORY_TABLE); // Este método elimina la tabla de la base de datos
    await queryInterface.dropTable(PRODUCT_TABLE); // Este método elimina la tabla de la base de datos
  },
};
