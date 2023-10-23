import React from "react";
import "./Home.css";
import { Link } from "react-router-dom"; 

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <nav className="navbar">
          <div className="logo">Travello</div>
          <ul className="nav-list">
          <li><Link to="/"className="nav-item">Home</Link></li> 
          <li><Link to="/packages" className="nav-item">Packages</Link></li> 
          <li><Link to="/hotels" className="nav-item">Hotels</Link></li> 
          <li><Link to="/flights" className="nav-item">Flights</Link></li> 
          <li><Link to="/about" className="nav-item">About</Link></li> 
        </ul>
          <div className="login-container">
              <img className="user" alt="User" src="https://c.animaapp.com/rU5vBAuv/img/user--1--1-1@2x.png" /> 
              <div className="login-text">LOG IN</div>
          </div>
          </nav>    
      </div>
      <div className="box">
          <div class="rectangle-row">

              <div class="rectangle-item">
              <label for="destination">Destination:</label>
              <input type="text" id="destination" name="destination" />
              </div>

              <div class="rectangle-item">
              <label for="checkin">Check In:</label>
              <input type="date" id="checkin" name="checkin" />
              </div>

              <div class="rectangle-item">
              <label for="checkout">Check Out:</label>
              <input type="date" id="checkout" name="checkout" />
              </div>

              <div class="rectangle-item">
              <label for="guests">Guests:</label>
              <input type="number" id="guests" name="guests" />
              </div>

              <div class="circle-item">
            <button>
              <img src="https://c.animaapp.com/rU5vBAuv/img/right-arrow-1-1@2x.png" alt=""/>
            </button>
              </div>
          </div>
      </div>
      
      <div className="content">
              <div className="explore">EXPLORE</div>
              <div className="THE-WORLD">THE WORLD</div>
              <p className="lorem-ipsum">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and
              </p>
              <div className="More-info">
                  <div className="rectangle-1"/>
                  <div className="discover">DISCOVER</div>
                  
              </div>
              <div className="div-wrapper">
                      <div className="text-wrapper-8">Know More</div>
              </div>
      </div>

    </div>

  );
};

export default Home;
