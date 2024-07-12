const express = require('express');
const passport = require('passport');
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
        res.json({ user });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

module.exports = router;
