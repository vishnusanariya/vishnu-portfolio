import './About.style.css'
const About = () => {
  return (
    <div className="about">
        <div className="about-header">
          <div className="hi-name">
            Hi 👋, I'm
            <span className='bold-name'> Vishnu Sanariya</span>
          </div>
            <div className='designation'>Software Developer</div>
        </div>
        <div className="about-content">
            <ul className='about-details'>
                <li>I completed my gradutaion in B.Tech Information Technology from <a href='https://www.ddu.ac.in/'>Dharmsinh Desai University</a> (2019-2023) . </li>
                <li>I have basic knowledge of the web development, created <a href='/projects'>projects</a> based on the Django and MERN stack during my college career .</li>
                <li>In free time i like to read books 📕 and listening music 🎵 .</li>
                <li>I like to learn about the new technologies .</li>
            </ul>
        </div>
    </div>
  )
}

export default About