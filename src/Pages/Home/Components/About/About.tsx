import "./About.style.css";
const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <div className="hi-name">
          Hi 👋, I'm
          <span className="bold-name"> Vishnu Sanariya</span>
        </div>
        <div className="designation">Software Developer</div>
      </div>
      <div className="about-content">
        <ul className="about-details">
          <li>
           I obtained my Bachelor's degree in Information Technology from <a href='https://www.ddu.ac.in/'>Dharmsinh Desai University</a>, graduated in May 2023.
          </li>
          <li>
          Throughout my college years, I gained a foundational understanding of web development and completed <a href="/projects">projects</a> using Django and the MERN stack.
          </li>
          <li>During my leisure time, I enjoy reading books📕 and listening to music 🎵.</li>
          <li> I have a strong interest in exploring and learning about the latest technologies.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
