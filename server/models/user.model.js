const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { saltRounds } = require('../config');

const schema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ebike' }],
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ebike' }],
    selling: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ebike' }],
    owned: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ebike' }],
}, {
    toJSON: {
        getters: true,
        versionKey: false,
        transform: function (doc, ret) {
            delete ret.password;
        }
    }
});

schema.pre('find', handler);
schema.pre('findOne', handler);
schema.pre('findOneAndUpdate', { document: true, query: false }, handler);

function handler(next) {
    this
        .populate('cart')
        .populate('wishlist')
        .populate('selling')
        .populate('owned');
    next();
}

schema.pre('save', function (next) {
    if (!this.isModified('password')) { return next(); }

    bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) { return next(err); }

        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) { return next(err); }
            this.password = hash;
            return next();
        });
    });

});

schema.methods.comparePasswords = function (newPass) {
    return bcrypt.compare(newPass, this.password);
}


module.exports = mongoose.model('user', schema);