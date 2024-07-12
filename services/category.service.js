const boom = require('@hapi/boom');
const { models } = require('../lib/sequelize');

class CategoryService {
  constructor() {}
  async create(data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  async find() {
    const categories = await models.Category.findAll();
    return categories;
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id, {
      include: ['products'],
    });
    if (!category) {
      throw boom.notFound('category not found');
    }
    return category;
  }

  async update(id, changes) {
    const category = await this.findOne(id);
    await category.update(changes);
    return category;
  }

  async delete(id) {
    const category = await this.findOne(id);
    await category.destroy();
    return category;
  }
}

module.exports = CategoryService;
