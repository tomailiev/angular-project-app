const { Router } = require('express');
const eBikeModel = require('../../models/ebike.model');
const controllerFactory = require('../modules/controllerFactory');

const eBikeController = controllerFactory(eBikeModel);

const router = Router();

router.route('/')
    .get(eBikeController.getAll)
    .post(eBikeController.createOne);

router.route('/:id')
    .get(eBikeController.getOne)
    .put(eBikeController.updateOne)
    .delete(eBikeController.deleteOne);

module.exports = router;