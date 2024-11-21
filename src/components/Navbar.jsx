import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './Navbar.css'; // Custom styles and animations
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/headerlogo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center fw-bold" href="#">
          <img
            src={logo}
            alt="Logo"
            className="navbar-logo me-2"
          />
          Hamdard Committee
        </a>
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
              <Link className="nav-link px-3 text-white hover-effect" to="/">
                <i className="fas fa-home me-2"></i>Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-white hover-effect" to="/about">
                <i className="fas fa-info-circle me-2"></i>About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-white hover-effect" to="/media">
                <i className="fas fa-images me-2"></i>Media Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary text-white fw-bold donate-now-btn px-4 py-2" to="donate">
                <i className="fas fa-heart me-2"></i>Donate Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
