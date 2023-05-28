import "./Education.style.css";
const Education = () => {
  return (
    <div className="education">
      <div className="college">
        <div className="institute-name">Dharmsinh Desai University</div>
        <div className="duration-place">
          <i className="fa fa-calendar" aria-hidden="true"></i> July 2019 - May
          2023 <i className="fa fa-location-arrow" aria-hidden="true"></i>{" "}
          Nadiad
        </div>
        <div className="degree info">
          <div className="gradution">BTech Information Technology</div>
          <span className="score">CGPA : 7.87/10</span>
          <br />
          <span>
            Undergraduate Courses include Design and Analysis of Algorithms,
            Advanced Algorithms, Software Engineering, Object-Oriented Software
            Engineering, Operating Systems, Database Management Systems, UNIX,
            Basics of Computer Architecture.
          </span>
        </div>
      </div>
      <div className="school">
        <div className="institute-name">Dholakiya Group of School</div>
        <div className="duration-place">
          <i className="fa fa-calendar" aria-hidden="true"></i> June 2010 - Mar
          2019 <i className="fa fa-location-arrow" aria-hidden="true"></i>{" "}
          Rajkot
        </div>
        <div className="hsc info">
          <div className="gradution">12th (Science) - GSHEB</div>
          <span className="score">
            Percentage : 85.38
            <br />
            (Overall)
          </span>
        </div>
        <div className="ssc info">
          <div className="gradution">10th (SSC) - GSHEB</div>
          <span className="score">
            Percentage : 94%
            <br />
            (Overall)
          </span>
        </div>
      </div>
    </div>
  );
};

export default Education;
