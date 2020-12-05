const { Router } = require('express');
const auth = require('../middleware/auth')
const userModel = require('../../models/user.model');
const controllerFactory = require('../modules/controllerFactory');
const authorizerFactory = require('../modules/loginHelper');
const userMiddleware = require('../middleware/user.middleware');
const userController = controllerFactory(userModel);
const loginController = authorizerFactory(userModel);
const router = Router();


router.route('/')
    .get(userController.getAll)
    .post(auth(false), userMiddleware.filterBody, loginController.login)
    .put(auth(false), userMiddleware.validation(), userMiddleware.filterBody, loginController.register)

router.route('/loginCheck')
    .get(auth(true), loginController.loginCheck);
    
router.route('/:id')
    .get(auth(true), userController.getOne)
    .put(auth(true), userController.updateOne)
    .delete(auth(true), userController.deleteOne)
    .post(auth(true), loginController.logout);


module.exports = router;