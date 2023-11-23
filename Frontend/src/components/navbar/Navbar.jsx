import React, { useContext } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

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
        <div className="navLinks">
          <Link
            to="/hotels"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Hotels
          </Link>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            Trains
          </Link>
          <Link
            to="/travel"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Flights
          </Link>
          <Link
            to="/about"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            About
          </Link>
        </div>

        {user ? (
          <div className="navItems">
            <span className="username">{user.username}</span>
            <button className="logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <Link
              to="/register"
              className="register"
              style={{
                textDecoration: "none",
              }}
            >
              Register
            </Link>
            <Link
              to="/register"
              className="register"
              style={{
                textDecoration: "none",
              }}
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
