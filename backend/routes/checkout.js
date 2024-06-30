// routes/checkout.js

const express = require('express');
const router = express.Router();
const Checkout = require('./models/checkout'); // Sesuaikan dengan path model Checkout

// Endpoint untuk menyimpan data checkout ke MongoDB
router.post('/checkout', async (req, res) => {
    const { products, size, totalAmount, shippingAddress, phoneNumber, userId } = req.body;

    try {
        // Buat objek checkout baru berdasarkan data yang diterima
        const newCheckout = new Checkout({
            products,
            size,
            totalAmount,
            shippingAddress,
            phoneNumber,
            user: userId // Sesuaikan dengan ID user yang sedang login atau melakukan checkout
        });

        // Simpan data checkout ke MongoDB
        const savedCheckout = await newCheckout.save();

        res.status(200).json({
            success: true,
            message: 'Checkout berhasil disimpan',
            checkout: savedCheckout
        });
    } catch (error) {
        console.error('Error saat menyimpan checkout:', error);
        res.status(500).json({
            success: false,
            message: 'Gagal menyimpan checkout, silakan coba lagi nanti'
        });
    }
});

module.exports = router;
