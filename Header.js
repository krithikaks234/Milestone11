import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1 className="brand-name">Taste Haven</h1>
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories">Explore</Link></li>
          <li><Link to="/about">Our Story</Link></li>
          <li><Link to="/cart">Your Cart</Link></li>
          <li><Link to="/login">Sign In</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
