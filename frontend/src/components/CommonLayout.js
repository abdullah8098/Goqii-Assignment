import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LeftNav from './LeftNav';
import './../Layout.css';

const CommonLayout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="main">
        <LeftNav />
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
