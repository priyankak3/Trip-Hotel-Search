import React from 'react'
import "./navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navContainer">
        
            <span className="logo">Travello</span>
            <div className="navItems">
            <button className="register">Register</button>
            <button className="register">Login</button>
            </div>
            
        </div>
    </div>
  )  
}

export default Navbar