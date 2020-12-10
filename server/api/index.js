const { Router } = require('express');

const userRouter = require('./resources/user.resource');
const ebikeRouter = require('./resources/eBike.resource');

module.exports.connect = function(path, app) {
    const router = Router();
    
    router.use('/users', userRouter);
    router.use('/ebikes', ebikeRouter);
    app.use(path, router);
}