import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css"; // Custom styles
import logo from "../assets/footer.png";

const Footer = () => {
  return (
    <footer className="footer py-4 bg-dark text-white">
      <div className="container text-center">
        {/* Logo and Title */}
        <div className="footer-logo mb-3">
          <img src={logo} alt="Hamdard Committee Logo" className="footer-logo-img" />
        </div>
        <h5 className="footer-title mb-3">Hamdard Committee</h5>
        <p className="footer-description">
          Serving communities since 2019 with dedication and compassion.
        </p>

        {/* Social Media Icons */}
        <div className="footer-social-icons my-3">
          <a
            href="https://www.facebook.com/hamdardcommittee"
            className="social-link mx-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/hamdardcommittee"
            className="social-link mx-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com/hamdardcommittee"
            className="social-link mx-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i className="fab fa-x-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/hamdardcommittee"
            className="social-link mx-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        {/* Developer Signature */}
        <div className="footer-signature">
          <p className="bilal"> 
            Design & Developed by{" "}
            <a
              href="https://itx-bilal.vercel.app/"
              className="designer-name"
              target="_blank"
              rel="noopener noreferrer"
            >
             Muhammad Bilal
            </a>
          </p>
        </div>

        {/* Copyright */}
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Hamdard Committee. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
