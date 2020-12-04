const jwt = require('jsonwebtoken');
const { allowedEndpoints, secret, cookieName } = require('../../config');

module.exports = function auth(req, res, next) {
    const cookies = req.cookies;
    const token = cookies[cookieName]
    if (!token) {
        const endpoint = allowedEndpoints[req.originalUrl];
        if (endpoint) {
            if (endpoint.includes(req.method.toLowerCase())) {
                return next();
            } else {
                return next({ message: 'Unathorized' })
            }
        } else {
            return next({ message: 'Unathorized' })
        }
    } else {
        jwt.verify(token, secret, (err, result) => {
            if (err) { return next({ message: err.message }) }
            res.locals.user = result;
            return next();
        });
    }

}