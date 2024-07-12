const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { config } = require('../config/config');
const router = express.Router();

router.post('/login', async (req, res, next) => {
  passport.authenticate('local', (error, user) => {
    try {
      if (error || !user) {
        return res.status(401).json({ error });
      }
      req.login(user, { session: false }, async (error) => {
        if (error) {
          return next(error);
        }
        const token = jwt.sign(
          {
            sub: user.id,
            role: user.role,
          },
          config.jwtSecret
        );
        res.json({ user, token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

module.exports = router;
