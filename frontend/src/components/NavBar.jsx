import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="topLeft d-flex m-0 px-3"><Link to="/">Banjaara</Link></div>
        <div className="topRight d-flex m-0 px-3"><Link to="/pages/SignIn">Sign in</Link></div>
      </div>
    </>
  );
}

export default NavBar;

