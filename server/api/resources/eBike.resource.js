const { Router } = require('express');
const eBikeModel = require('../../models/ebike.model');
const controllerFactory = require('../modules/controllerFactory');
const auth = require('../middleware/auth')

const eBikeController = controllerFactory(eBikeModel);

const router = Router();

router.route('/')
    .get(eBikeController.getAll)
    .post(auth(true), eBikeController.createOne);

router.route('/:id')
    .get(eBikeController.getOne)
    .put(auth(true), eBikeController.updateOne)
    .delete(auth(true), eBikeController.deleteOne);

module.exports = router;