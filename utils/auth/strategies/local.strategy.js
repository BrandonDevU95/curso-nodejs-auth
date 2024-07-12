const { Strategy } = require('passport-local');

const UserService = require('../../../services/user.service');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const service = new UserService();

const LocalStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    service
      .findByEmail(email)
      .then((user) => {
        if (!user) {
          return done(boom.unauthorized('User not found'), false);
        }
        bcrypt.compare(password, user.password, (err, result) => {
          if (err || !result) {
            return done(boom.unauthorized('Invalid password'), false);
          }
          delete user.dataValues.password;
          return done(null, user);
        });
      })
      .catch((err) => {
        return done(err);
      });
  }
);

module.exports = LocalStrategy;
