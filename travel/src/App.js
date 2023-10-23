import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import {Login} from "./Components/Login";
import Register from "./Components/Register";
import Hotels from "./Components/Hotels";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* Background image */}
      <div className="background-image" />
      {/* Container for page content */}
      <div className="page-content">{children}</div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/hotels"
          element={
            <Layout>
              <Hotels />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
