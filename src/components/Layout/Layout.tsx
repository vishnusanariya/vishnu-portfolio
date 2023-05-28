import "./Layout.style.css";
import { useNavigate, Outlet } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <button
          className="navbar-items"
          name="about"
          onClick={()=>{navigate('/');}}
        >
          <i className="fa fa-info-circle" aria-hidden="true"></i> About
        </button>
        <button
          className="navbar-items"
          name="experience"
          onClick={()=>{navigate('/experience')}}
        >
          <i className="fa fa-briefcase" aria-hidden="true"></i> Experiance
        </button>
        <button
          className="navbar-items"
          name="skills"
          onClick={()=>{navigate('/skills')}}
        >
          <i className="fa fa-code" aria-hidden="true"></i> Skills
        </button>
        <button
          className="navbar-items"
          name="projects"
          onClick={()=>{navigate('/projects')}}
        >
          <i className="fa fa-list-alt" aria-hidden="true"></i> Projects
        </button>
        <button
          className="navbar-items"
          name="education"
          onClick={()=>{navigate('/education')}}
        >
          <i className="fa fa-graduation-cap" aria-hidden="true"></i> Education
        </button>
        <button
          className="navbar-items"
          name="achievements"
          onClick={()=>{navigate('/achievements')}}
        >
          <i className="fa fa-trophy" aria-hidden="true"></i> Achievments
        </button>
        <button
          className="navbar-items"
          name="contact"
          onClick={()=>{navigate('/contact')}}
        >
          <i className="fa fa-address-card" aria-hidden="true"></i> Contact
        </button>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
