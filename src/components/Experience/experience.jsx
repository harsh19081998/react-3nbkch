import React from 'react';
import './experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="experience__detail-icon"
              />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className="experience__detail">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="experience__detail-icon"
              />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Competent</small>
              </div>
            </article>
            <article className="experience__detail">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="experience__detail-icon"
              />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Advanced Beginner</small>
              </div>
            </article>
            <article className="experience__detail">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="experience__detail-icon"
              />
              <div>
                <h4>React</h4>
                <small className="text-light">Advanced Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="experience__detail-icon"
              />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Competent</small>
              </div>
            </article>
            <article className="experience__detail">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="experience__detail-icon"
              />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__detail">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="experience__detail-icon"
              />
              <div>
                <h4>Java</h4>
                <small className="text-light">Advanced Beginner</small>
              </div>
            </article>
            <article className="experience__detail">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="experience__detail-icon"
              />
              <div>
                <h4>Python</h4>
                <small className="text-light">Competent</small>
              </div>
            </article>
            <article className="experience__detail">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="experience__detail-icon"
              />
              <div>
                <h4>C#</h4>
                <small className="text-light">Competent</small>
              </div>
            </article>
            <article className="experience__detail">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="experience__detail-icon"
              />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
