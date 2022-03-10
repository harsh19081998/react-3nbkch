import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/harsh-patel-63b462156"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/harsh19081998" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100027504952258"
        target="_blank"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </div>
  );
};

export default HeaderSocial;
