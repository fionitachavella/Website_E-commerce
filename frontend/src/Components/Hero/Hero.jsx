import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import heromodel from '../Assets/heromodel.png';

const Hero = () => {
    let navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/new-collection');
    };

    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>Baru Untuk Mu</h2>
                <div>
                    <div className="haro-hand-icon">
                        <p>baru</p>
                        <img src={hand_icon} alt=""/>
                    </div>
                    <p>koleksi</p>
                    <p>untuk semua</p>
                </div>
                <div className="hero-latest-btn" onClick={handleButtonClick} style={{ cursor: 'pointer' }}>
                    <div>Koleksi Terbaru</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={heromodel} alt=""/>
            </div>
        </div>
    );
}
export default Hero;
