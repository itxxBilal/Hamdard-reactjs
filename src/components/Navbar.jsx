import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/headerlogo.png';

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  // Function to toggle the collapse state
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  // Close the navbar when a link is clicked
  const closeNav = () => setIsNavCollapsed(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center fw-bold" to="/">
          <img src={logo} alt="Logo" className="navbar-logo me-2" />
          Hamdard Committee
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link px-3 text-white hover-effect" to="/" onClick={closeNav}>
                <i className="fas fa-home me-2"></i>Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-white hover-effect" to="/about" onClick={closeNav}>
                <i className="fas fa-info-circle me-2"></i>About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-white hover-effect" to="/media" onClick={closeNav}>
                <i className="fas fa-images me-2"></i>Media Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-white hover-effect" to="/dashboard" onClick={closeNav}>
                <i className="fas fa-tachometer-alt me-2"></i>Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary text-white fw-bold donate-now-btn px-4 py-2" to="/donate" onClick={closeNav}>
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
