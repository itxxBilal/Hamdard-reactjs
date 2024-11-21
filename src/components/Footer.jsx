import React from "react";
import "./Footer.css"; // Import custom styles
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../assets/footer.png'
const Footer = () => {
  return (
    <footer className="footer">
      {/* Wavy SVG Background */}
     

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
