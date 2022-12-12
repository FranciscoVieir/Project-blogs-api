const { User } = require('../models');

const getByEmail = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  // console.log(user, 'userLogin');
  return user;
};
module.exports = {
  getByEmail,
};