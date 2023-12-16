import React from "react";
import "../styles/HoverContent.css";
const HoverContentProfile = () => {
  return (
    <div className="hovercontent">
      <div className="hoverRowOne">
        <div className="profileIcon">
          <i class="fa-regular fa-user fa-2xl"></i>
        </div>
        <div className="profileName">Shubham Lutade</div>
      </div>
      <div className="options">
        <div className="hoverRowTwo">My Learning</div>
        <div className="hoverRowThree">Account Settings</div>
        <div className="hoverRowFour">Help</div>
        <div className="hoverRowFive">Logout</div>
      </div>
    </div>
  );
};

export default HoverContentProfile;
