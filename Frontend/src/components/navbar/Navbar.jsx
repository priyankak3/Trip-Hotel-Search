import React, { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link
          to="/"
          style={{
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <span className="logo">Travello</span>
        </Link>
        {user ? (
          user.username
        ) : (
          <div className="navItems">
            <button className="register">Register</button>
            <button className="register">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
