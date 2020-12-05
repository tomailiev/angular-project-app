const jwt = require('jsonwebtoken');
const { secret } = require('../config');

function jwtVerify(token) {
    if (!token) { return Promise.resolve(false); }
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, user) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(user);
        })
    })
}

function jwtSign(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, secret, { expiresIn: '1h' }, (err, encoded) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(encoded);
        });
    });
}

module.exports = {
    jwtSign,
    jwtVerify
};