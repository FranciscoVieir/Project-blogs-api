const services = require('../Services/getAllUsersPost');

const getAllUserPosts = async (_request, response) => {
  const AllUserPosts = await services.getAllPosts();

  return response.status(200).json(AllUserPosts);
};

const getPostById = async (request, response) => {
  const { id } = request.params;
  const postById = await services.getPostById(id);

  if (!postById) return response.status(404).json({ message: 'Post does not exist' });

  return response.status(200).json(postById);
};

module.exports = {
  getAllUserPosts,
  getPostById,
};