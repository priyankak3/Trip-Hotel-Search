import React from "react";
import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
    email: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "REGISTER_START" });
    try {
      const res = await axios.post(
        "http://localhost:8080/auth/register",
        credentials
      );
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data.details });
      navigate("/login");
    } catch (err) {
      dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div>
      <div className="login">
        <div className="content-wrapper">
          <div className="logo-text">TRAVELLO</div>
          <div className="input-container">
            <label className="input-label">Username/Email</label>
            <input
              type="text"
              className="lInput"
              placeholder="username"
              id="username"
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label className="input-label">Password</label>
            <input
              type="password"
              className="lInput"
              placeholder="password"
              id="password"
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label className="input-label">Password</label>
            <input
              type="email"
              className="lInput"
              placeholder="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="button-container">
            <button disabled={loading} onClick={handleClick}>
              Register
            </button>
            {error && <span>{error.message}</span>}
          </div>
          <div className="account">
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "inherit",
                padding: "3px",
              }}
            >
              <h3>Already have an Account? Login</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
