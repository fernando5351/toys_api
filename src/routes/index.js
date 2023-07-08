const router = require('express').Router();

const UserRouter =  require('./userRouter');

function switchRouter(app) {
    app.use('/api/v1', router);
    router.use('/users', UserRouter);
}

module.exports = switchRouter;