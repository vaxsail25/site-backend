import React, { useState } from 'react';
import NavButton from './NavButton';
import Menu from './Menu';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(!menuOpen);
  }

  return (
    <nav className="navbar">
      <div className='navbar-left'>
        <a href="/" className="logo">
          <img src='/sources/logo-white.png' alt="Logo" />
        </a>
      </div>
      <div className="navbar-center">
        <a href="/" className="nav-link">Home<div className='link-bottom'></div></a>
        <a href="/about" className="nav-link">About<div className='link-bottom'></div></a>
        <a href="/services" className="nav-link">Services<div className='link-bottom'></div></a>
        <a href="/contact" className="nav-link">Contact<div className='link-bottom'></div></a>
      </div>
      <div className="navbar-right">
        <NavButton 
          toggleMenu={toggleMenu}
          isOpen={menuOpen}/>
        <Menu isOpen={menuOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
