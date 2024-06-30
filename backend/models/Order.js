// models/Order.js
const mongoose = require('mongoose');
const { type } = require('os');

const orderSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true },
            size: { type: String, required: true }
        }
    ],
    totalAmount: { type: Number, required: true },
    shippingAddress: { type: String },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
