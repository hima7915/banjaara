import React from "react";
import "./navsignedin.css";
import { Link } from "react-router-dom";

function NavSignedIn() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white p-0">
        {/* <div className="container p-0"> */}
          <Link className="topLeft d-flex m-0 px-3" to="/">
            Banjaara
          </Link>
          <div className="d-flex align-items-center">
            <button
              className="navbar-toggler border-0 px-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="hamburger">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="30px"
                  height="30px"
                >
                  <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
                </svg>
              </span>
            </button>
          </div>
          <div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarNav">
            {/* <hr className="navhr" /> */}
            <ul className="navbar-nav mx-3 gap-4 pt-0 mb-4 mb-md-0">
              <li className="nav-item m-auto fs-4">
                <Link className="nav-link py-md-0" to="/pages/Explore">
                  Search
                </Link>
              </li>
              <li className="nav-item m-auto fs-4">
                <Link className="nav-link py-md-0" to="/pages/BlogView">
                  My Feed
                </Link>
              </li>
              <li className="nav-item m-auto fs-4">
                <Link className="nav-link py-md-0" to="/pages/Profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item m-auto fs-4">
                <Link className="nav-link py-md-0" to="/pages/Experience">
                  New Blog
                </Link>
              </li>
            </ul>
          </div>
        {/* </div> */}
      </nav>
    </>
  );
}

export default NavSignedIn;
