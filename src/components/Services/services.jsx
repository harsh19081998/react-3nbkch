import React from 'react';
import './services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <artice className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <FontAwesomeIcon icon={faCheck} className="service__list-icon" />
              <p>Contrary to popular belief, Lorem Ipsum is not simply</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="service__list-icon" />
              <p>Contrary to popular belief, Lorem Ipsum is not simply</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="service__list-icon" />
              <p>Contrary to popular belief, Lorem Ipsum is not simply</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="service__list-icon" />
              <p>Contrary to popular belief, Lorem Ipsum is not simply</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="service__list-icon" />
              <p>Contrary to popular belief, Lorem Ipsum is not simply</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="service__list-icon" />
              <p>Contrary to popular belief, Lorem Ipsum is not simply</p>
            </li>
          </ul>
        </artice>
        <artice className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <FontAwesomeIcon icon={faCheck} className="service__list-icon" />
              <p>Contrary to popular belief, Lorem Ipsum is not simply</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="service__list-icon" />
              <p>Contrary to popular belief, Lorem Ipsum is not simply</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="service__list-icon" />
              <p>Contrary to popular belief, Lorem Ipsum is not simply</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="service__list-icon" />
              <p>Contrary to popular belief, Lorem Ipsum is not simply</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="service__list-icon" />
              <p>Contrary to popular belief, Lorem Ipsum is not simply</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="service__list-icon" />
              <p>Contrary to popular belief, Lorem Ipsum is not simply</p>
            </li>
          </ul>
        </artice>
        <artice className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <FontAwesomeIcon icon={faCheck} className="service__list-icon" />
              <p>Contrary to popular belief, Lorem Ipsum is not simply</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="service__list-icon" />
              <p>Contrary to popular belief, Lorem Ipsum is not simply</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="service__list-icon" />
              <p>Contrary to popular belief, Lorem Ipsum is not simply</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="service__list-icon" />
              <p>Contrary to popular belief, Lorem Ipsum is not simply</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="service__list-icon" />
              <p>Contrary to popular belief, Lorem Ipsum is not simply</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="service__list-icon" />
              <p>Contrary to popular belief, Lorem Ipsum is not simply</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="service__list-icon" />
              <p>Contrary to popular belief, Lorem Ipsum is not simply</p>
            </li>
          </ul>
        </artice>
      </div>
    </section>
  );
};
export default Services;
