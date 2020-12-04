const { body, validationResult } = require('express-validator');

module.exports.filterBody = function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) { return next(errors) }
    const { email, password } = req.body;
    const name = req.body.name || '';
    req.body = { email, password, name };
    next();
}

module.exports.validation = function () {
    return [
        body('email').isEmail(),
        // body('repeatPassword').custom((value, { req }) => {
        //     if (value !== req.body.password) {
        //         throw new Error('Password confirmation does not match password');
        //     }
        //     // Indicates the success of this synchronous custom validator
        //     return true;
        // })
    ];
} 