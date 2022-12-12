const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';
const jwtConfig = {
  expiresIn: '15d',
  algorithm: 'HS256',
};
const createTokenAuth = (user) => {
  const tokenCreated = jwt.sign(user, secret, jwtConfig);
  return tokenCreated;
};
module.exports = {
  createTokenAuth,
};