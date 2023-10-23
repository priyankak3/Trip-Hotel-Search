import React from "react";
import "./Register.css";
import { Login } from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Register = () => {
  return (
    <div className="register-container">
      <div className="content-wrapper">
        <div className="logo-text">TRAVELLO</div>
        <div className="input-container">
          <label className="input-label">Username</label>
          <input type="text" className="input-field" />
        </div>
        <div className="input-container">
          <label className="input-label">Email</label>
          <input type="email" className="input-field" />
        </div>
        <div className="input-container">
          <label className="input-label">Password</label>
          <input type="password" className="input-field" />
        </div>
        <div className="button-container">
          <button className="button">Register</button>
        </div>
        <p className="login-text">Already have an account? Login <Router>
     <Routes>
      <Route path="/login" element={<Login/>} />
    </Routes>
    </Router></p>
      </div>
    </div>
  );
};

export default Register;
