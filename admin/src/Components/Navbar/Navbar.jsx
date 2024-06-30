import React from 'react'
import './Navbar.css'
import logo from '../../assets/clarneed.jpg'

const Navbar = ({ onLogout }) => {
  return (
    <div className="navbar">
     <div className="nav-logo">
       < img src={logo} alt=" " />
       <p>Clarneed</p>
        </div> 
    <div>
        <button className='logout-button' onClick={onLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
