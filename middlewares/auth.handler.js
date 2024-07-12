const boom = require('@hapi/boom');
const { config } = require('dotenv');

function checkApiKey(req, res, next) {
  const apiKey = req.headers['api'];
  if (apiKey === config.apiKey) {
    next();
  } else {
    next(boom.unauthorized('Invalid API Key'));
  }
}

module.exports = { checkApiKey };
