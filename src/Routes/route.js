const { Router } = require('express');
const { loginController } = require('../Controllers/loginController');
const { createNewUserController } = require('../Controllers/createNewUserController');
const { middlewareLogin } = require('../Middleware/middlewareLogin');
const { getAllUser } = require('../Controllers/getAllUsersController');
const { getUserById } = require('../Controllers/getByIdController');
const { createCategory, getAllCategories } = require('../Controllers/createCategoryController');
const { getAllUserPosts, getPostById } = require('../Controllers/getAllPostController');

const {
  createNewUserValidation,
  validationEmail,
} = require('../Middleware/createNewUserValidation');

const { tokenValidation } = require('../Middleware/tokenValidation');

const router = Router();

router.post('/login', middlewareLogin, loginController);

router.post('/user', createNewUserValidation, validationEmail, createNewUserController);

router.get('/user', tokenValidation, getAllUser);

router.get('/user/:id', tokenValidation, getUserById);

router.post('/categories', tokenValidation, createCategory);

router.get('/categories', tokenValidation, getAllCategories);

router.get('/post', tokenValidation, getAllUserPosts);

router.get('/post/:id', tokenValidation, getPostById);

module.exports = router;
