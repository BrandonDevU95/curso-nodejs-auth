const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const { config } = require('../config/config');

const UserService = require('./user.service');
const service = new UserService();

class AuthService {
  async getUser(email, password) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw boom.unauthorized();
    }
    delete user.dataValues.password;
    return user;
  }

  signToken(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, config.jwtSecret);
    return {
      user,
      token,
    };
  }

  async sendMail(email) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      secure: true, // true for 465, false for other ports
      port: 465,
      auth: {
        user: config.email,
        pass: config.emailPassword,
      },
    });

    await transporter.sendMail({
      from: `"Foo Boo 👻" <${config.email}>`, // sender address
      to: `${user.email}`, // list of receivers
      subject: 'Nuevo correo de prueba', // Subject line
      text: 'Estoy usando Nodemailer!', // plain text body
      html: `<b>Holaaaaaaaaaa!</b>`, // html body
    });

    return { message: `Email sent to ${user.email}` };
  }
}

module.exports = AuthService;
