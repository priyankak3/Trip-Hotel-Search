import React, { useState } from 'react';
import "./Login.css";
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      navigate('/hotels');
      console.log("navigate")
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="login">
      <div className="content-wrapper">
        <div className="logo-text">TRAVELLO</div>
        <div className="input-container">
          <label className="input-label">Username/Email</label>
          <input type="text" className="input-field" value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-container">
          <label className="input-label">Password</label>
          <input type="password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="button-container">
          <button className="button" onClick={handleLogin}>Login</button>
        </div>
        <p className="register-text">Don’t have an account? Register</p>
      </div>
    </div>
  );
};
