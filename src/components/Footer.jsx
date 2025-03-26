import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-contact">
          <FaPhoneAlt className="footer-icon" />
          <p>Call : +01 12345678990</p>
        </div>
        <div className="footer-contact">
          <FaEnvelope className="footer-icon" />
          <p>Email : demo@gmail.com</p>
        </div>
        <div className="footer-contact">
          <FaMapMarkerAlt className="footer-icon" />
          <p>Location</p>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-section">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Furniture</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h3>INSTAGRAM FEEDS</h3>
          <div className="insta-grid">
            <img src="/images/f1.png" alt="feed" />
            <img src="/images/f2.png" alt="feed" />
            <img src="/images/f3.png" alt="feed" />
            <img src="/images/f4.png" alt="feed" />
            <img src="/images/f5.png" alt="feed" />
            <img src="/images/f6.png" alt="feed" />
          </div>
        </div>

       
        <div className="footer-section">
          <h3>SIGN UP TO OUR NEWSLETTER</h3>
          <input type="email" placeholder="Enter Your Email" />
          <button className="subscribe-btn">Subscribe</button>
          <div className="social-icons">
            <FaFacebookF className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaLinkedinIn className="social-icon" />
            <FaInstagram className="social-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
