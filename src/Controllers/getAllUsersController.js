const services = require('../Services/servicesGetAllUsers');

const getAllUser = async (_request, response) => {
  const AllUser = await services.getAllUser();
  // console.log('teste', AllUser);

  return response.status(200).json(AllUser);
};

module.exports = {
  getAllUser,
};