import React from 'react';
import './layout.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          {/* Left Image Column */}
          <div className="left-image">
            <img src="../../assets/images/footer-shoe.png" alt="Left Shoe" className="hidden-lg" />
          </div>
          {/* About Us Section */}
          <div className="footer-section about-us">
            <h3 className="section-title">About Us</h3>
            <ul className="section-list">
              <li><a href="#" className="footer-link">About Achilles</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
              <li><a href="#" className="footer-link">News and Blog</a></li>
              <li><a href="#" className="footer-link">Help</a></li>
              <li><a href="#" className="footer-link">Shop by Location</a></li>
              <li><a href="#" className="footer-link">Affiliates and Partners</a></li>
              <li><a href="#" className="footer-link">Press Center</a></li>
            </ul>
          </div>
          {/* Services Section */}
          <div className="footer-section services">
            <h3 className="section-title">Services</h3>
            <ul className="section-list">
              <li><a href="#" className="footer-link">Gift Cards</a></li>
              <li><a href="#" className="footer-link">Mobile App</a></li>
              <li><a href="#" className="footer-link">Shipping and Delivery</a></li>
              <li><a href="#" className="footer-link">Order Pickup</a></li>
              <li><a href="#" className="footer-link">Account SignUp</a></li>
              <li><a href="#" className="footer-link">Payment</a></li>
            </ul>
          </div>
          {/* Help Section */}
          <div className="footer-section help">
            <h3 className="section-title">Help</h3>
            <ul className="section-list">
              <li><a href="#" className="footer-link">Help Desk</a></li>
              <li><a href="#" className="footer-link">Returns</a></li>
              <li><a href="#" className="footer-link">Track Orders</a></li>
              <li><a href="#" className="footer-link">Feedback</a></li>
              <li><a href="#" className="footer-link">Security and Fraud</a></li>
              <li><a href="#" className="footer-link">Transactions</a></li>
            </ul>
          </div>
          {/* Social Section */}
          <div className="footer-section social">
            <h3 className="section-title">Social</h3>
            <ul className="section-list">
              <li><a href="#" className="footer-link">Facebook</a></li>
              <li><a href="#" className="footer-link">Instagram</a></li>
              <li><a href="#" className="footer-link">Twitter</a></li>
              <li><a href="#" className="footer-link">TikTok</a></li>
            </ul>
          </div>
          {/* Right Image Column */}
          <div className="right-image">
            <img src="../../assets/images/footer-right.png" alt="Right Shoe" className="hidden-lg" />
          </div>
        </div>
        {/* Bottom Image on Mobile */}
        <div className="mobile-image">
          <img src="../../assets/images/footer-shoe.png" alt="Left Shoe" className="mobile-img" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
