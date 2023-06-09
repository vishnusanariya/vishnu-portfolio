import React from "react";
import Dropdown from "./Dropdown";
import "./Layout.style.css";
import { useNavigate, Outlet } from "react-router-dom";
const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mobile-navbar">
        <header className="header-menu">
          <Dropdown />
        </header>
      </div>
      <div className="navbar">
        <button
          className="navbar-items"
          name="about"
          onClick={() => {
            navigate("/");
          }}
        >
          <i className="fa fa-info-circle" aria-hidden="true"></i> About
        </button>
        <button
          className="navbar-items"
          name="experience"
          onClick={() => {
            navigate("/experience");
          }}
        >
          <i className="fa fa-briefcase" aria-hidden="true"></i> Experiance
        </button>
        <button
          className="navbar-items"
          name="skills"
          onClick={() => {
            navigate("/skills");
          }}
        >
          <i className="fa fa-code" aria-hidden="true"></i> Skills
        </button>
        <button
          className="navbar-items"
          name="projects"
          onClick={() => {
            navigate("/projects");
          }}
        >
          <i className="fa fa-list-alt" aria-hidden="true"></i> Projects
        </button>
        <button
          className="navbar-items"
          name="education"
          onClick={() => {
            navigate("/education");
          }}
        >
          <i className="fa fa-graduation-cap" aria-hidden="true"></i> Education
        </button>
        <button
          className="navbar-items"
          name="achievements"
          onClick={() => {
            navigate("/achievements");
          }}
        >
          <i className="fa fa-trophy" aria-hidden="true"></i> Achievments
        </button>
        <button
          className="navbar-items"
          name="contact"
          onClick={() => {
            navigate("/contact");
          }}
        >
          <i className="fa fa-address-card" aria-hidden="true"></i> Contact
        </button>
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div className="footer">
        <div className="copyright">
          © <span id="year">2023</span>-Vishnu Sanariya
        </div>
        <div className="links">
          <a href="mailto:vishnusanariya98@gmail.com" target="_blank">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/vishnusanariya/" target="_blank">
            <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/vishnusanariya" target="_blank">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com/vishnu_sanariya/" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href='https://twitter.com/20nuSanariya'>
          <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
