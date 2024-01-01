import React from "react";
import "../styles/HoverContentContactUs.css";
const HoverContentContactUs = () => {
  const openNewUrl = () => {
    window.open("https://www.instagram.com/beastthatcodes/","_blank")
  };
  return (
    <div className="connectWithUs" onClick={openNewUrl}>
      <div className="instaIcon">
      <i class="fa-brands fa-instagram fa-xl"></i>
      </div>
      <span>beastThatCodes</span>
    </div>
  );
};

export default HoverContentContactUs;
