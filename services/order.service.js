const boom = require('@hapi/boom');
const { models } = require('../lib/sequelize');

class OrderService {
  constructor() {}
  async create(data) {
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  async find() {
    const orders = await models.Order.findAll();
    return orders;
  }

  async addItem(data) {
    const newItem = await models.OrderProduct.create(data);
    return newItem;
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id, {
      include: [
        {
          association: 'customer',
          include: ['user'],
        },
        'items',
      ],
    });
    if (!order) {
      throw boom.notFound('order not found');
    }
    return order;
  }

  async findByUser(userId) {
    const orders = await models.Order.findAll({
      where: {
        '$customer.user.id$': userId,
      },
      include: [
        {
          association: 'customer',
          include: ['user'],
        },
      ],
    });
    return orders;
  }

  async update(id, changes) {
    const order = await models.Order.findByPk(id);
    if (!order) {
      throw boom.notFound('order not found');
    }
    const updatedOrder = await order.update(changes);
    return updatedOrder;
  }

  async delete(id) {
    const order = await this.findOne(id);
    await order.destroy();
    return { rta: true };
  }
}

module.exports = OrderService;
