import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Navbar.css"; // Add your CSS file here

const Navbar = () => {
  return (
    <nav className="navbar-in">
      <Link to="/" className="logo1">Travello</Link> 
      <ul className="nav-list1">
        <li><Link to="/"className="nav-item1">Home</Link></li> 
        <li><Link to="/packages" className="nav-item1">Packages</Link></li> 
        <li><Link to="/hotels" className="nav-item1">Hotels</Link></li> 
        <li><Link to="/flights" className="nav-item1">Flights</Link></li> 
        <li><Link to="/about" className="nav-item1">About</Link></li> 
      </ul>
    </nav>
  );
};

export default Navbar;
