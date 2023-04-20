import React from "react";
import "./navsignedin.css";
import { Link } from "react-router-dom";
function NavSignedIn() {
  return (
    <>
      <div className="navsignedin">
        <div className="topLeft"><Link to="/">Banjaara</Link></div>
        <div>
            <ul className="toplist">
                <li className="topli">Search</li>
                <li className="topli">New Blog</li>
                <li className="topli">My Feed</li>
                <li className="topli">Profile</li>
            </ul>
        </div>
      </div>
    </>
  );
}

export default NavSignedIn;
