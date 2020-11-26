const { Router } = require('express');
const userModel = require('../../models/user.model');
const controllerFactory = require('../modules/controllerFactory');
const authorizerFactory = require('../modules/loginHelper');
const userMiddleware = require('../middleware/user.middleware');
const userController = controllerFactory(userModel);
const loginController = authorizerFactory(userModel);
const router = Router();

router.route('/')
    .get(userController.getAll)
    .post(userMiddleware.filterBody, loginController.login)
    .put(userMiddleware.validation(), userMiddleware.filterBody, loginController.register)

router.route('/:id')
    .get(userController.getOne)
    .put(userController.updateOne)
    .delete(userController.deleteOne)
    .post(loginController.logout);

module.exports = router;