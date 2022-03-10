import React, { useRef } from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookMessenger,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_u1bhtpd',
      'template_7oem8cs',
      form.current,
      '0G_j_LS732i7mh0Ff'
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Toach</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <artice className="contact__option">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="contact__option-icon"
            />
            <h4>Email</h4>
            <h5>hahp110@gmail.com</h5>
            <a href="mailto:hahp110@gmail.com" target="_blank">
              Send a message
            </a>
          </artice>
          <artice className="contact__option">
            <FontAwesomeIcon
              icon={faFacebookMessenger}
              className="contact__option-icon"
            />
            <h4>Messenger</h4>
            <h5>harsh19081998</h5>
            <a href="https://m.me/harsh19081998" target="_blank">
              Send a message
            </a>
          </artice>
          <artice className="contact__option">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="contact__option-icon"
            />
            <h4>WhatsApp</h4>
            <h5>+91 9913711695</h5>
            <a
              href="https://api.whatsApp.com/send?phone+919913711695"
              target="_blank"
            >
              Send a message
            </a>
          </artice>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
