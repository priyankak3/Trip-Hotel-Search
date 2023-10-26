import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:8080/auth/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
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

        <div className="button-container">
          <button disabled={loading} onClick={handleClick}>
            Login
          </button>
          {error && <span>{error.message}</span>}
        </div>
        <div className="account">
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "inherit", padding: "3px" }}
          >
            <h3>Don't have an Account? Register</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
