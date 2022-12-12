const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const tokenValidation = async (request, response, next) => {
  const { authorization } = request.headers;

  if (!authorization) return response.status(401).json({ message: 'Token not found' });

  try {
    const codeVerify = jwt.verify(authorization, secret);

    request.payload = codeVerify.data;

    next();
  } catch (erro) {
    return response.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  tokenValidation,
};