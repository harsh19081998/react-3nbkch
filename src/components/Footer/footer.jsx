import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        HARSH PATEL
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.facebook.com/profile.php?id=100027504952258"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://instagram.com/harsh19081998" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.twitter.com/harshpatel1999" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; HARSH Patel.All rights reserved.</small>
      </div>
    </footer>
  );
};
export default Footer;
