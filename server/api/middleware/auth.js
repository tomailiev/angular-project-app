const jwt = require('jsonwebtoken');
const { allowedEndpoints, secret } = require('../../config');
const cookieName = 'web-token';

module.exports = function auth(req, res, next) {
    const cookies = req.cookies;
    const token = cookies[cookieName]
    if (!token) {
        const endpoint = allowedEndpoints[req.originalUrl]
        if (endpoint) {
            if (endpoint.includes(req.method.toLowerCase())) {
                return next();
            }
        }
        res.status(401).json({ message: 'Unathorized' });
        return;
    }

    jwt.verify(token, secret, (err, result) => {
        if (err) { return next({ message: err.message }) }
        res.locals.user = result;
        next();
    });
}