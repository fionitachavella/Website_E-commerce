import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Offers.css';
import heroimg from '../Assets/heroimg.png';

const Offers = () => {
    let navigate = useNavigate();
    
    const handleButtonClick = () => {
        navigate('/newsletter'); 
    };

    return (
        <div className='offers'>
            <div className="offers-left">
                <h1>Ekslusive</h1>
                <h1>Penawaran Untuk Mu</h1>
                <p>HANYA PADA PRODUK BEST SELLER</p>
                <button onClick={handleButtonClick}>Check Now</button>
            </div>
            <div className="offers-right">
                <img src={heroimg} alt=""/>
            </div>
        </div>
    );
}

export default Offers;
