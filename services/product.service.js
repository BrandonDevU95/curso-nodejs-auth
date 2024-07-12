const boom = require('@hapi/boom');
const { Op } = require('sequelize');
const { models } = require('../lib/sequelize');

class ProductsService {
  constructor() {}
  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find(query) {
    const { limit, offset, price, price_min, price_max } = query;
    const options = {
      include: ['category'],
      where: {},
    };

    if (limit > 100) {
      throw boom.badRequest('limit should be less than 100');
    }
    if (offset < 0) {
      throw boom.badRequest('offset should be greater than 0');
    }

    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }

    if (price) {
      options.where.price = query.price;
    }

    if (price_min && price_max) {
      options.where.price = {
        [Op.gte]: price_min,
        [Op.lte]: price_max,
      };
    }

    const products = await models.Product.findAll(options);
    return products;
  }

  async findOne(id) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('product is block');
    }
    return product;
  }

  async update(id, changes) {
    const model = await this.findOne(id);
    const rta = await model.update(changes);
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { rta: true };
  }
}

module.exports = ProductsService;
