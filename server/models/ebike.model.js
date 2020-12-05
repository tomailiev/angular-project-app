const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    description: { type: String, required: false },
    price: { type: Number, required: true, min: 0 },
    imageUrl: { type: String, required: true },
    // buyers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    // wishlisted: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// schema.pre('find', handler);
// schema.pre('findOne', handler);

// function handler(next) {
//     this
//         // .populate('buyers')
//         // .populate('wishlisted')
//         // .populate('creatorId');
//     next();
// }

schema.virtual('priceString').get(function () {
    return `$${this.price}`;
});

// schema.virtual('buyersNum').get(function () {
//     return this.buyers.length;
// });

// schema.virtual('wishlistedNum').get(function () {
//     return this.wishlisted.length;
// });

module.exports = mongoose.model('ebike', schema);