const services = require('../Services/servicesCreateNewUser');
const jwtConfig = require('../jwtConfig');
const { User } = require('../models');

const createNewUserController = async (request, response) => {
  const { email, password, displayName, image } = request.body;
  const findOneEmail = await User.findOne({ where: { email } });

  if (findOneEmail) {
    return response.status(409).json({ message: 'User already registered' });
  }
  await services.creatingNewUser(email, password, displayName, image);

  const token = jwtConfig.createTokenAuth({ email });

  return response.status(201).json({ token });
};

module.exports = {
  createNewUserController,
};