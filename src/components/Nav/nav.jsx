import React from 'react';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import {
  faHome,
  faUser,
  faBook,
  faHandshake,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a
        href="#"
        className={activeNav === '#' ? 'active' : ''}
        onClick={() => setActiveNav('#')}
      >
        <FontAwesomeIcon icon={faHome} />
      </a>
      <a
        href="#about"
        className={activeNav === '#about' ? 'active' : ''}
        onClick={() => setActiveNav('#about')}
      >
        <FontAwesomeIcon icon={faUser} />
      </a>
      <a
        href="#experience"
        className={activeNav === '#experience' ? 'active' : ''}
        onClick={() => setActiveNav('#experience')}
      >
        <FontAwesomeIcon icon={faBook} />
      </a>
      <a
        href="#services"
        className={activeNav === '#services' ? 'active' : ''}
        onClick={() => setActiveNav('#services')}
      >
        <FontAwesomeIcon icon={faHandshake} />
      </a>
      <a
        href="#contact"
        className={activeNav === '#contact' ? 'active' : ''}
        onClick={() => setActiveNav('#contact')}
      >
        <FontAwesomeIcon icon={faMessage} />
      </a>
    </nav>
  );
};
export default Nav;
