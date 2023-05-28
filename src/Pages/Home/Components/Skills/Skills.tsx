import React from 'react'
import './Skills.style.css'
const Skills:React.FC = () => {
  return (
    <div className='skills'>
        <div className="skill-title">Languages</div>
        <div className="skill-details">C++, Python, JavaScript, SQL</div>
        <div className="skill-title">Frameworks</div>
        <div className="skill-details">NodeJS, ReactJS, TypeScript, FastAPI, Django</div>
        <div className="skill-title">Databases</div>
        <div className="skill-details">MongoDB, PostGreSQL, MySQL, SQLite</div>
        <div className="skill-title">Tools</div>
        <div className="skill-details">Visual Studio Code, GIT, Postman, Docker, JIRA </div>
    </div>
  )
}

export default Skills