const { cookieName } = require('../config');
module.exports = function (err, req, res, next) {
    console.log(err);
    if (err.message) {
        const message = err.message;
        if (message === 'jwt expired') {
            res.clearCookie(cookieName);
            res.status(401).send({message});
            return;
        }
        res.status(400).send({ message });
        return;
    }
    res.status(500).send('Internal Server Error');
}