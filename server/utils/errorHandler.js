const { cookieName } = require('../config');
module.exports = function (err, req, res, next) {
    console.log(err);
    if (err.name === 'TokenExpiredError') {
        res.clearCookie(cookieName);
        res.status(401).send({message: 'JWT expired. Please log in again'});
        return;
    }
    if (err.message) {
        const message = err.message;
        // if (message === 'jwt expired') {
        //     res.status(401).send({message});
        //     return;
        // }
        res.status(400).send({ message });
        return;
    }
    res.status(500).send('Internal Server Error');
}