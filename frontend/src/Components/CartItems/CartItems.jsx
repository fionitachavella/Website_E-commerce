import React, { useContext, useState } from 'react';
import axios from 'axios';
import './CartItems.css';
import remove_icon from '../Assets/cart_cross_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        address: '',
        phoneNumber: ''
    });

    const [selectedProducts, setSelectedProducts] = useState([]); // State untuk produk yang dipilih
    const [sizes, setSizes] = useState({}); 

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSizeChange = (e, productId) => {
        setSizes({
            ...sizes,
            [productId]: e.target.value
        });
    };

    const handleCheckout = () => {
        // Filter produk yang dipilih dari keranjang dan simpan ke dalam state selectedProducts
        const selectedProducts = all_product.filter(product => cartItems[product.id] > 0).map(product => ({
            id: product.id,
            name: product.name,
            quantity: cartItems[product.id],
            price: product.new_price,
            size: sizes[product.id] // Memasukkan informasi ukuran produk
        }));

        setSelectedProducts(selectedProducts); // Set state selectedProducts dengan produk yang dipilih
        setShowPopup(true);
    };

    const openWhatsApp = () => {
        // Nomor WhatsApp penerima (ganti dengan nomor yang sesuai)
        const phoneNumber = '6285797975167'; // Misalnya nomor Indonesia dengan kode 62

        // Data yang ingin Anda kirim sebagai pesan
        const message = encodeURIComponent(
            `*Full Name*: ${formData.fullName}\n` +
            `*Email*: ${formData.email}\n` +
            `*Address*: ${formData.address}\n` +
            `*Phone Number*: ${formData.phoneNumber}\n` +
            `*Products*: 
            ${selectedProducts.map(product => 
                `${product.name} 
                - *Size*: ${product.size} 
                - *Quantity*: ${product.quantity} 
                - *Price*: Rp${product.price}`).join('\n')}\n\n` 
                +
            
                `*Total*: Rp${getTotalCartAmount()}`
        );

        // Bentuk URL untuk WhatsApp
        const whatsappUrl = `https://wa.me/6285797975167?text=${message}`;

        // Buka URL menggunakan window.open()
        window.open(whatsappUrl, '_blank');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Membuat objek data yang akan dikirim
        const checkoutData = {
            fullName: formData.fullName,
            email: formData.email,
            password: formData.password,
            address: formData.address,
            phoneNumber: formData.phoneNumber,
            products: selectedProducts  // Tambahkan data produk yang dipilih
        };

        console.log('Data yang akan dikirim:', checkoutData);  // Periksa data di console

        axios.post('http://54.172.100.247:3000/checkout', formData)
            .then(response => {
                console.log(response.data);
                // Reset form atau tutup popup setelah pengiriman berhasil
                setShowPopup(false);

                // Setelah sukses, buka WhatsApp dengan data yang diisi
                openWhatsApp();
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Size</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    const totalPrice = e.new_price * cartItems[e.id];
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>Rp{e.new_price}</p>
                                <select 
                                    className="cartitems-size-dropdown" 
                                    value={sizes[e.id] || ''}
                                    onChange={(event) => handleSizeChange(event, e.id)}
                                >
                                    <option value="" disabled>Select size</option>
                                    {(e.sizes || []).map(size => (  // Pastikan e.sizes ada dan array
                                        <option key={size} value={size}>{size}</option>
                                    ))}
                                </select>
                                <p>{cartItems[e.id]}</p>
                                <p>Rp{totalPrice}</p>
                                <img
                                    className='cartitems-remove-icon'
                                    src={remove_icon}
                                    onClick={() => { removeFromCart(e.id); }}
                                    alt=""
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}            
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>Rp{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>Rp{getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button onClick={handleCheckout}>Checkout</button>
                </div>
            </div>

            {showPopup && (
                <div className="popup">
                    <div className="popup-inner">
                        <button className="close-btn" onClick={() => setShowPopup(false)}>Close</button>
                        <h2>Checkout Form</h2>
                        <div className="selected-products">
                            <h3>Selected Products:</h3>
                            {selectedProducts.map((product) => (
                                <div key={product.id}>
                                    <p>{product.name}
                                        - Price: Rp{product.price}
                                        - Quantity: {product.quantity}
                                        - Size: {product.size}
                                    </p>    
                                </div>
                            ))}
                        </div>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="tel"
                                name="phoneNumber"
                                placeholder="Phone Number"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                required
                            />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartItems;
