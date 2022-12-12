const services = require('../Services/servicesCategory');

const createCategory = async (request, response) => {
  const { name } = request.body;

  if (!name || name.length === 0) {
    return response.status(400).json({ message: '"name" is required' });
  }

  const newCategory = await services.createCategory(name);

  return response.status(201).json(newCategory);
};

const getAllCategories = async (_request, response) => {
  const getCategories = await services.getAllCategories();

  return response.status(200).json(getCategories);
};

module.exports = {
  createCategory,
  getAllCategories,
};