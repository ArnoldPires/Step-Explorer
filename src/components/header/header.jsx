import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./header.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
     <header className="header">
      <div className="logo">
        <Link to="/"><img src="/images/cover.png" alt="Step Explorer Logo" /></Link>
      </div>
      <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/pages/HikeGuide">Hiking Guide</Link></li>
          <li><Link to="/pages/HikeSearch">Search For A Trail</Link></li>
          <li><Link to="#">Login</Link></li>
          <li><Link to="#">Sign up</Link></li>
        </ul>
      </nav>
      <div className={`hamburger-menu ${mobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  )
}

export default Header;