import React from 'react';
import './../Layout.css';

const Header = () => {
  return (
    <header className="header bg-primary text-white p-4">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <img src="https://via.placeholder.com/100" alt="Logo" className="logo-img" />
        </div>

        <h1 className="m-0 font-weight-bold" style={{ fontSize: '2rem' }}>GoQii Website</h1>

        <nav className="navigation">
          <ul className="d-flex m-0">
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
