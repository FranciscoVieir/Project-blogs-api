const { User } = require('../models');

const getAllUser = async () => {
  const user = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return user;
};

module.exports = {
  getAllUser,
};