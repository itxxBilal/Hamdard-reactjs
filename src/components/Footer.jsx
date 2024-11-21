import React from "react";
import "./Footer.css"; // Import custom styles
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../assets/footer.png'
const Footer = () => {
  return (
    <footer className="footer">
      {/* Wavy SVG Background */}
      <div className="footer-wave">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#28a745"
            fillOpacity="1"
            d="M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,133.3C672,107,768,85,864,74.7C960,64,1056,64,1152,74.7C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="footer-container">
        <div className="footer-content">
        <div className="footer-logo">
            <img src={logo} alt="Hamdard Committee Logo" className="footer-logo-img" />
          </div>
          <p className="footer-title">Hamdard Committee</p>
          <p className="footer-description">
            Serving communities since 2019 with dedication and compassion.
          </p>

          {/* Social Media Icons */}
          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          {/* Footer Signature */}
          <div className="footer-signature">
            <p className="design-by">
              Design & Developed by <span className="designer-name">Bilal</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
