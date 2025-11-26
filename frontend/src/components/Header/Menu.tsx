import React from 'react';

interface MenuProps {
  isOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ isOpen }) => {
  return (
    <div className={`menu ${isOpen ? 'open' : ''}`} id="menu">
      <div className='menu-container'>
        <a href="/" className="logo">
          <img src='/sources/logo-white.png' alt="Logo" />
        </a>
        <div className="menu-items">
          <a href="/" id="home-btn">Home</a>
          <a href="/auth/login" id="login-btn">Login</a>
          <a href="/auth/register" id="register-btn">Register</a>
          <a href="#">HTML</a>
          <a href="#">CSS</a>
          <a href="#">JavaScript</a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
