const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscribers');

router.post('/', async (req, res) => {
    const { email } = req.body;

    try {
        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();
        res.status(201).json({ message: 'Subscribed successfully!' });
    } catch (error) {
        res.status(400).json({ message: 'Error subscribing', error });
    }
});

module.exports = router;
