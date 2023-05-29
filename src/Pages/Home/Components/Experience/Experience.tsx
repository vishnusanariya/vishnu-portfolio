import React from "react";
import "./Experience.style.css";
const Experience: React.FC = () => {
  return (
    <div className="experience">
      <div className="company-details">
        <div className="title">
          <img className="cds-logo" src="cds-logo.png" alt="cds-logo.png" />
          <div className="exp-details">
            <div className="role">Software Developer Intern</div>
            <div className="timeline-place">
              <i className="fa fa-calendar" aria-hidden="true"></i> Dec 2022 -
              May 2023{" "}
              <i className="fa fa-location-arrow" aria-hidden="true"></i>{" "}
              Ahmedabad,India.
            </div>
          </div>
        </div>
        <div className="work-details">
          <ul>
            <li>
              Collaborated on the development of an internal tool called
              Universal Rest Client (URC) that automatically generated recurring
              code for various platform integrations, reducing developer efforts
              by 70%.
            </li>
            <li>
              Developed a backend application for Todo using FastAPI and fronted
              in React hosted it on Docker.
            </li>
            <li>
              Developed a fronted application for bookstore using React +
              TypeScript.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
