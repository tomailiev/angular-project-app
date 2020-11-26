const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config');
const cookieName = 'web-token';
const saltRounds = 12;

module.exports = function (model) {
    function login(req, res, next) {
        const { email, password } = req.body;
        model.findOne({ email }).lean()
            .then(doc => {
                if (!doc) { return next({ message: 'Email or password not recognized' }) }
                bcrypt.compare(password, doc.password, (err, same) => {
                    if (err) { return next(err) }
                    if (!same) { return next({ message: 'Email or password not recognized' }) }
                    jwt.sign({ email: doc.email, _id: doc._id }, config.secret, { expiresIn: '1h' }, (err, token) => {
                        if (err) { return next(err) }
                        res.cookie(cookieName, token);
                        res.status(200).send({ email: doc.email, _id: doc._id });
                    })
                })
            })
            .catch(next);
    }

    function register(req, res, next) {
        const { email, password } = req.body;
        model.findOne({ email })
            .then(doc => {
                if (doc) { return next({ message: 'Email taken. Did you mean to log in?' }) }
                bcrypt.genSalt(saltRounds, (err, salt) => {
                    if (err) { return next(err) }
                    bcrypt.hash(password, salt, (err, hash) => {
                        if (err) { return next(err) }
                        model.create({ email, password: hash })
                            .then(doc => res.status(201).json({ success: true }))
                            .catch(next)
                    })
                })
            })
            .catch(next);
    }

    function logout(req, res, next) {
        res.clearCookie(cookieName);
        res.status(200).json({ success: true });
    }

    return {
        login,
        logout,
        register
    };
}