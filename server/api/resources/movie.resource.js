const { Router } = require('express');
const movieModel = require('../../models/movie.model');
const controllerFactory = require('../modules/controllerFactory');

const movieController = controllerFactory(movieModel);

const router = Router();

router.route('/')
    .get(movieController.getAll)
    .post(movieController.createOne);

router.route('/:id')
    .get(movieController.getOne)
    .put(movieController.updateOne)
    .delete(movieController.deleteOne);

module.exports = router;