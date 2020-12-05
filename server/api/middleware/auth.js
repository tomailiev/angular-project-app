const { jwtVerify } = require('../../utils/jwt');
const { cookieName } = require('../../config');
const User = require('../../models/user.model');

// module.exports = function auth(req, res, next) {
//     const cookies = req.cookies;
//     const token = cookies[cookieName]
//     if (!token) {
//         const endpoint = allowedEndpoints[req.originalUrl];
//         if (endpoint) {
//             if (endpoint.includes(req.method.toLowerCase())) {
//                 return next();
//             } else {
//                 return next({ message: 'Unathorized' })
//             }
//         } else {
//             return next({ message: 'Unathorized' })
//         }
//     } else {
//         jwt.verify(token, secret, (err, result) => {
//             if (err) { return next({ message: err.message }) }
//             res.locals.user = result;
//             return next();
//         });
//     }

// }

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
                    req.user = user;
                    res.locals.user = user;
                    // res.locals.loggedInUser = {};
                    // res.locals.loggedInUser.email = user.email;
                    // res.locals.loggedInUser.id = user.id;
                    return next();
                })
                .catch(next);
        } else {
            return next();
        }
    }
}