import React, { useState } from 'react';
import Logo from '../../assets/svgs/archilles-logo.svg';
import CartIcon from '../../assets/svgs/cart.svg';
import UserIcon from '../../assets/svgs/user.svg';
import SearchIcon from '../../assets/svgs/Search.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
import './layout.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <a href='/' className="logo">
          <img src={Logo} alt="Logo" width={95} height={42} />
        </a>
        <div className="menu">
          <a href="/" className="menu-item">Home</a>
          <a href="#" className="menu-item">Categories</a>
          <a href="#" className="menu-item">New Arrivals</a>
          <a href="#" className="menu-item">Contact Us</a>
          <a href="#" className="menu-item">Store</a>
          <a href="#" className="menu-item">FAQ</a>
        </div>
        <div className="search-cart-user">
          <div className="cart">
            <a href="/product-listing">
              <img src={CartIcon} alt="Cart" width={24} height={24} />
            </a>
            <span>0</span>
          </div>
          <img src={UserIcon} alt="User" width={24} height={24} className="user-icon" />
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>
      </nav>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="search">
          <input type="text" placeholder="Search Item" />
          <img src={SearchIcon} alt="Search" width={16} height={16} />
        </div>
        <a href="/" className="menu-item">Home</a>
        <a href="#" className="menu-item">Categories</a>
        <a href="#" className="menu-item">New Arrivals</a>
        <a href="#" className="menu-item">Contact Us</a>
        <a href="#" className="menu-item">Store</a>
        <a href="#" className="menu-item">FAQ</a>
      </div>
    </>
  );
};

export default Header;
