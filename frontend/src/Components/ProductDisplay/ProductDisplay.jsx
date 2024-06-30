import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState(''); // State untuk menyimpan ukuran yang dipilih

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    return (
        <div className='productdisplay'>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'>
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                </div>
                <div className='productdisplay-img'>
                    <img className='productdisplay-main-img' src={product.image} alt='' />
                </div>
            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className='productdisplay-right-stars'>
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_dull_icon} alt='' />
                  
                </div>
                <div className='productdisplay-right-prices'>
                    <div className='productdisplay-right-price-old'>Rp{product.old_price}</div>
                    <div className='productdisplay-right-price-new'>Rp{product.new_price}</div>
                </div>
                <div className='productdisplay-right-description'>
                    A lightweight, usually knitted, pullover shirt, close fitting and a a round neckline short
                </div>
                <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
                {/* Tombol "ADD TO CART" dengan pemilihan ukuran */}
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className='productdisplay-right-category'>
                    <span>Category : </span>{product.Category}
                </p>
            </div>
        </div>
    );
};

export default ProductDisplay;
