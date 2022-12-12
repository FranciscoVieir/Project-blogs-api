const servicesLogin = require('../Services/servicesLogin');

const jwtConfig = require('../jwtConfig');

const loginController = async (request, response) => {
  const { email, password } = request.body;
  const userExists = await servicesLogin.getByEmail(email, password);
  if (!userExists) return response.status(400).json({ message: 'Invalid fields' });

  // console.log(userExists);
  const token = jwtConfig.createTokenAuth({ user: userExists });
  return response.status(200).json({ token });
};

module.exports = {
  loginController,
};