import React from "react";
import { Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Mainlayout.css";

const Mainlayout = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            My App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Dynamic Page Content */}
      <main className="container my-4">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-light text-center py-3 mt-auto">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} My App. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Mainlayout;
