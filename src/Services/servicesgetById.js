const { User } = require('../models');

const getUserById = async (id) => {
  const UserById = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  return UserById;
};

module.exports = {
  getUserById,
};