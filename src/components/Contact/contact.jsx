import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Toach</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <artice className="contact_option">
            <FontAwesomeIcon icon={faEnvelope} />
            <h4>Email</h4>
            <h5>harshpatel990@gmail.com</h5>
            <a href="mailto:harshpatel990@gmail.com">Send a message</a>
          </artice>
        </div>
        <form action=""></form>
      </div>
    </section>
  );
};
export default Contact;
