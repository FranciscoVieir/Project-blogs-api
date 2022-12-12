const services = require('../Services/servicesgetById');

const getUserById = async (request, response) => {
  const { id } = request.params;
  // console.log(id, 'id');

  const usersId = await services.getUserById(id);
  // console.log(usersId, 'usersID');

  if (!usersId) return response.status(404).json({ message: 'User does not exist' });

  return response.status(200).json(usersId);
};

module.exports = {
  getUserById,
};