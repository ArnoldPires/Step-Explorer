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
          <li><Link to="/HikeGuide">Hiking Guide</Link></li>
          <li><Link to="/HikeSearch">Find A Hike/Trail</Link></li>
          <li><Link to="/NewTrails">Create A Hike</Link></li>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/Signup">Sign up</Link></li>
          <li><Link to="/test">test</Link></li>
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