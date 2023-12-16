import React, { useState } from "react";
import VideoSection from "./VideoSection";
import "../styles/AppBody.css";

const AppBody = () => {
  //This useState and function is used to change the arror direction which is further used to open and close the menu
  const [arrowDirection, setArrowDirection] = useState("left");
  const toggleArrowDirection = (e) => {
    if (Array.from(e.target.classList).includes("fa-caret-left")) {
      setArrowDirection("right");
    } else {
      setArrowDirection("left");
    }
  };

  return (
    <div className="AppBody">
      <div className="actionArrow">
        <i
          className={`fa-solid fa-caret-${arrowDirection} fa-xl`}
          onClick={toggleArrowDirection}
        ></i>
      </div>
      {arrowDirection==="left" && <div className="menu">Menu Options</div>}
      
      <div className="content">
        <VideoSection />
        <VideoSection />
        <VideoSection />
        <VideoSection />
        <VideoSection />
        <VideoSection />
        <VideoSection />
      </div>
    </div>
  );
};

export default AppBody;
