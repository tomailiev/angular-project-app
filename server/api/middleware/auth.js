const { jwtVerify } = require('../../utils/jwt');
const { cookieName } = require('../../config');
const User = require('../../models/user.model');

module.exports = (shouldBeAuth) => {
    return function (req, res, next) {
        const token = req.cookies[cookieName];
        if (!token && shouldBeAuth) {
            return next({ message: 'Path requires token' })
        }
        if (token && !shouldBeAuth) {
            return next({ message: 'Path not accessible for signed in users' })
        }
        if (token) {
            jwtVerify(token)
                .then(user => {
                    return User.findById(user.id);
                })
                .then(user => {
                    if (!user) {
                        throw ({
                            name: 'TokenExpiredError'
                        });
                    }
                    if (req.params.id) {
                        if (req.params.id != user._id) {
                            throw ({
                                message: 'Not authenticated',
                                name: 'InvalidTokenError'
                            });
                        }
                    }
                    res.locals.user = user;
                    return next();
                })
                .catch(next);
        } else {
            return next();
        }
    }
}