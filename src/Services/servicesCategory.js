const { Category } = require('../models');

const createCategory = async (categoryName) => {
  const createCategoryName = await Category.create({ name: categoryName });

  return createCategoryName;
};

const getAllCategories = async () => {
  const getCategories = await Category.findAll();

  return getCategories;
};

module.exports = {
  createCategory,
  getAllCategories,
};