import React from 'react';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAward,
  faFolder,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src="https://source.unsplash.com/c_GmwfHBDzk/600x600"
              alt="about image"
            />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FontAwesomeIcon icon={faAward} className="about__icon" />
              <h5>Experience</h5>
              <small>1+ years working</small>
            </article>
            <article className="about__card">
              <FontAwesomeIcon icon={faUserGroup} className="about__icon" />
              <h5>Clients</h5>
              <small>10+ locals</small>
            </article>
            <article className="about__card">
              <FontAwesomeIcon icon={faFolder} className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>
            {' '}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
