import React from 'react'
import '../App.css';
import foodimg from './foodlogo.png'; 
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>
        <div className='logo-container'>
          <img className="logo" src={foodimg} alt='foodlogo'  height="250" width="auto"/>
        </div>
        <div className='nav-items'>
            <ul>
                {/* <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li> */}
                <li><Link to="/"> Home </Link></li> 
                <li><Link to="/About"> About Us </Link></li>
                <li><Link to="/Contact">Contact Us </Link></li>
                <li><Link to="/Cart"> Cart </Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header