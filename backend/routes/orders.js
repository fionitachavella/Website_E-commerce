// routes/orders.js
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// POST /api/orders
// Create a new order
router.post('/', async (req, res) => {
    try {
        const { email, password, address, phoneNumber, products, size, totalAmount, shippingAddress } = req.body;

        const newOrder = new Order({
            email,
            password,
            address,
            phoneNumber,
            products,
            size,
            totalAmount,
            shippingAddress
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
