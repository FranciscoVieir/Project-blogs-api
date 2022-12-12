const createNewUserValidation = async (request, response, next) => {
  const { password, displayName } = request.body;

  if (password.length < 6) {
    return response.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }

  if (displayName.length < 8) {
    return response.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  next();
};

const validationEmail = async (request, response, next) => {
  const { email } = request.body;

  const validationEmailWithRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);

  if (validationEmailWithRegex === false) {
    return response.status(400).json({
      message: '"email" must be a valid email',
    });
  }
  return next();
};

module.exports = {
  createNewUserValidation,
  validationEmail,
};