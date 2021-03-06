const jwt = require('../../utils/jwt');
const config = require('../../config');
const cookieName = config.cookieName;

module.exports = function (model) {
    function login(req, res, next) {
        const { email, password } = req.body;
        model.findOne({ email })
            .then(doc => {
                if (!doc) { throw ({ message: 'Email or password not recognized' });  }
                return Promise.all([
                    doc.comparePasswords(password),
                    doc
                ]);
            })
            .then(([isCorrect, user]) => {
                if (!isCorrect) {
                    throw ({ message: 'Email or password not recognized' });
                }
                // jwt.sign({ email: user.email, _id: user._id }, config.secret, { expiresIn: '1h' }, (err, token) => {
                //     if (err) { return next(err) }
                //     res.cookie(cookieName, token, { httpOnly: true });
                //     res.status(200).send(user);
                // })
                return Promise.all([
                    jwt.jwtSign({ email: user.email, id: user._id }),
                    user
                ])
            })
            .then(([token, user]) => {
                res.cookie(cookieName, token, { httpOnly: true });
                res.status(200).send(user);
            })
            .catch(e => {
                console.log(e);
                return next(e);
            });
    }

    function register(req, res, next) {
        const { email, password, name } = req.body;
        model.findOne({ email })
            .then(doc => {
                if (doc) { return next({ message: 'Email taken. Did you mean to log in?' }) }
                return model.create({ email, password, name });
            })
            .then(user => {
                if (!user) {
                    throw { message: 'User with this email already exists' };
                }
                res.status(201).json({ success: true });
            })
            .catch(next);
    }

    function logout(req, res, next) {
        res.clearCookie(cookieName);
        res.status(200).json({ success: true });
    }

    function loginCheck(req, res, next) {
        if (res.locals.user) {
            model.findOne({ _id: res.locals.user._id })
                .then(doc => {
                    res.status(200).send(doc);
                    return;
                })
                .catch((e) => {
                    return next(e)
                });
        } else {
            res.status(200).send({});
        }
    }

    return {
        login,
        logout,
        register,
        loginCheck
    };
}