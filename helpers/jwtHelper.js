if (process.env.NODE_ENV !== 'production') require('dotenv').config
const jwt = require('jsonwebtoken');

exports.sign = (payload) => {
  return jwt.sign(payload, process.env.SECRET_TOKEN);
};

exports.verify = (token) => {
  return jwt.verify(token, process.env.SECRET_TOKEN);
};
