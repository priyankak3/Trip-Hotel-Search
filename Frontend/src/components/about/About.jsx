import { React, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Footer from "../footer/Footer";
import MailList from "../mailList/MailList";

import "./about.css";

const About = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  return (
    <div>
      <div className="about">
        {user ? (
          <div className="navItems">
            <span className="logo">Travello</span>
            <span className="username">{user.username}</span>
            <button className="logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <span className="logo">Travello</span>
            <Link
              to="/register"
              className="register-1"
              style={{
                textDecoration: "none",
              }}
            >
              Create Account
            </Link>
            <Link
              to="/register"
              className="login-1"
              style={{ textDecoration: "none" }}
            >
              Login
            </Link>
          </div>
        )}

        <div className="overflow">
          <p className="Welcome">Welcome to the Travello</p>
          <p className="subheading">
            where we turn your travel dreams into unforgettable adventures.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="horizontal-bar"></div>
      </div>

      <div className="heading1">
        <div className="Travel-in-hand">PUTTING TRAVEL IN YOUR HAND</div>
        <div className="lorem">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati a
        </div>
      </div>
      <div className="dest">
        <div className="destinationList">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
            alt=""
            className="featuredImg"
          />
          <div className="Titles">
            <h1>Mumbai</h1>
            <h2>properties</h2>
          </div>
        </div>

        <div className="destinationList">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
            alt=""
            className="featuredImg"
          />
          <div className="Titles">
            <h1>Mumbai</h1>
            <h2>properties</h2>
          </div>
        </div>
        <div className="destinationList">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
            alt=""
            className="featuredImg"
          />
          <div className="Titles">
            <h1>Mumbai</h1>
            <h2>properties</h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="horizontal-bar"></div>
      </div>
      <MailList />
      <Footer />
    </div>
  );
};

export default About;
