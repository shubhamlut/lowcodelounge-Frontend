import React from "react";
import "../styles/HoverContent.css";
import unqorkIcon from "../images/unqorkIcon.png"

const HoverContentMyLearning = () => {
  return (
    <div>
      <div className="hovercontent">
        <div className="course">
          <div className="courseIcon">
            <img src={unqorkIcon} alt="" />
          </div>
          <div className="courseDesc">Unqork Zero to Expert</div>
        </div>
        
      </div>
    </div>
  );
};

export default HoverContentMyLearning;
