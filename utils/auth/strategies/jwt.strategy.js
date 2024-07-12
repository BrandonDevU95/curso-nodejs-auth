const { Strategy, ExtractJwt } = require('passport-jwt');

const { config } = require('../../../config/config');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret,
};

const JWTStrategy = new Strategy(options, async (tokenPayload, done) => {
  try {
    return done(null, tokenPayload);
  } catch (error) {
    return done(error);
  }
});

// const JWTStrategy = new Strategy(options, async (tokenPayload, done) => {
//   const service = new UserService();
//   service
//     .findById(tokenPayload.sub)
//     .then((user) => {
//       if (!user) {
//         return done(boom.unauthorized('User not found'), false);
//       }
//       delete user.dataValues.password;
//       return done(null, user);
//     })
//     .catch((err) => {
//       return done(err);
//     });
// });

module.exports = JWTStrategy;
