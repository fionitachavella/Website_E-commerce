import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/clarneed.jpg';
import instagram_icon from '../Assets/instagram_icon.png';
import map_removebg_preview from '../Assets/map-removebg-preview.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Clarneed</p>
      </div>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <a href="https://www.instagram.com/clarneed.official">
            <img src={instagram_icon} alt="Instagram" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href="https://wa.link/bv4urr">
            <img src={whatsapp_icon} alt="WhatsApp" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href="https://maps.app.goo.gl/G8DfjCJycyshKS316">
            <img src={map_removebg_preview} alt="maps" />
          </a>
      </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
