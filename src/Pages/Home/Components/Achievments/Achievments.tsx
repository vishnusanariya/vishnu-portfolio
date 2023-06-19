import React from "react";
import "./Achievements.style.css";
const Achievements: React.FC = () => {
  return (
    <div className="achievements">
      <div className="achievement">
        <div className="achievement-title">
          <img className="site-icon" src="leetcode.png"></img>Leetcode
        </div>
        <div className="achievement-details">
          <a href="https://leetcode.com/vishnu_23/">
            https://leetcode.com/vishnu_23
          </a>
        </div>
      </div>
      <div className="achievement">
        <div className="achievement-title">
          <img className="site-icon" src="hackerrank.png"></img>HackerRank
        </div>
        <div className="achievement-details">
          <a href="https://www.hackerrank.com/IT138_VISHNU">
            https://www.hackerrank.com/IT138_VISHNU
          </a>
        </div>
      </div>
      <div className="achievement">
        <div className="certificate-title">Cisco</div>
        <div className="achievement-details">
          <img className="certificate-icon" src="cisco-cyberSec.png"></img>
          <a href="https://www.credly.com/badges/18f123c0-0a09-46f0-9672-32b011844299/public_url">
            Cyber Security
          </a>
        </div>
      </div>
      <div className="achievement">
        <div className="certificate-title">Amazon Web Services(AWS)</div>
        <div className="achievement-details">
          <img className="certificate-icon" src="aws-cloud.png"></img>
          <a href="https://www.credly.com/badges/2a7605cb-8256-4b3d-aadd-2b6750d6c609/public_url">
            AWS Academy Graduate - AWS Academy Cloud Foundations
          </a>
        </div>
        <div className="achievement-details">
          <img className="certificate-icon" src="aws-mL.png"></img>
          <a href="https://www.credly.com/badges/de48951d-e0b8-4134-bc6b-a58b4beebec4/public_url">
            AWS Academy Graduate - AWS Academy Machine Learning Foundations
          </a>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
