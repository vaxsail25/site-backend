import React from 'react';

interface NavButtonProps {
  toggleMenu: () => void;
  isOpen: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ toggleMenu, isOpen }) => {
  return (
    <div className={`nav-btn ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
  );
};

export default NavButton;
