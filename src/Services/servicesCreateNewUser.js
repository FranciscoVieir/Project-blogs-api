const { User } = require('../models');

const creatingNewUser = async (email, password, displayName, image) => {
  const newUser = await User.create(
    { email, password, displayName, image },
  );
  return newUser;
};
module.exports = {
  creatingNewUser,
};