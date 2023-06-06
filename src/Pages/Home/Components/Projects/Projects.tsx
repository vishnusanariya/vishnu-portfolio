import React from "react";
import "./Projects.style.css";
const Projects: React.FC = () => {
  return (
    <div className="projects">
      <div className="project">
        <div className="project-title">
          <span className="heading">Job work services</span> - Feb 2022
          <div className="project-tech">
            <span className="tech">Python</span>
            <span className="tech">Django</span>
            <span className="tech">HTML/CSS</span>
          </div>
        </div>
        <div className="project-description">
          <ul>
            <li>
              The platform serves as a medium for small-scale manufacturers to
              collaborate with large-scale manufacturers in their industry.
            </li>
            <li>
              It offers essential CRUD functionality for managing job details
              and incorporates a chat feature to facilitate communication
              between both parties.
            </li>
            <li>
              Additionally, the platform offers the capability to select job
              workers for the created jobs.
            </li>
          </ul>
        </div>
      </div>
      <div className="project">
        <div className="project-title">
          <span className="heading">ProDocto</span> - June 2022
          <div className="project-tech">
            <span className="tech">Python</span>
            <span className="tech">Django</span>
            <span className="tech">HTML/CSS</span>
            <span className="tech">BootStrap</span>
          </div>
        </div>
        <div className="project-description">
          <ul>
            <li>
              The platform provides a comprehensive clinic management service
              that encompasses various functionalities.
            </li>
            <li>
              It includes patient record management, billing and invoicing, as
              well as prescription and pharmacy management features.
            </li>
          </ul>
        </div>
      </div>
      <div className="project">
        <div className="project-title">
          <span className="heading">PG rental service</span> - June 2022
          <div className="project-tech">
            <span className="tech">JavaScript</span>
            <span className="tech">React</span>
            <span className="tech">Node</span>
            <span className="tech">MongoDB</span>
          </div>
        </div>
        <div className="project-description">
          <ul>
            <li>
              This platform enables property owners to offer their properties to
              interested individuals as Paying Guests (PGs). It provides a
              comprehensive range of information, including rent, accommodation
              facilities, and location details.
            </li>
            <li>
              The platform supports CRUD operations (Create, Read, Update,
              Delete) for managing PG listings, allowing owners to easily add,
              delete, and update their listings as needed.
            </li>
            <li>
              The backend of the platform is developed using Node.js, while the
              frontend is built using React.
            </li>
          </ul>
        </div>
      </div>
      <div className="project">
        <div className="project-title">
          <span className="heading">Todo</span> - July 2023
          <div className="project-tech">
            <span className="tech">JavaScript</span>
            <span className="tech">React</span>
            <span className="tech">FastAPI</span>
          </div>
        </div>
        <div className="project-description">
          <ul>
            <li>
              Efficiently organize and manage your daily to-do items in a single
              location with ease.
            </li>
            <li>
              The platform offers CRUD operations (Create, Read, Update, Delete)
              for seamless handling of tasks, allowing you to add, delete, and
              mark items as complete.
            </li>
            <li>
              The backend is developed using FastAPI and fronted in React.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
