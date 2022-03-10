import React from 'react';
import CTA from '../Header/CTA';
import HeaderSocial from '../Header/headerSocial';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="container header__containter">
        <div className="con">
          <h5>hello I'am</h5>
          <h1>Harsh Patel</h1>
          <h5 className="text-light">Fullstack Developer</h5>
        </div>

        <CTA />
        <HeaderSocial />
        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  );
};
export default Header;
