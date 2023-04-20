import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="topLeft"><Link to="/">Banjaara</Link></div>
        <div className="topRight"><Link to="/pages/SignIn">Sign in</Link></div>
      </div>
    </>
  );
}

export default NavBar;
