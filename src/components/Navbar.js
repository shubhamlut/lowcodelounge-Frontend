import React from "react";
import "../styles/Navbar.css";
import HoverWrapper from "./HoverWrapper";
import HoverContentProfile from "./HoverContentProfile";
import HoverContentMyLearning from "./HoverContentMyLearning";
import {useNavigate} from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handleOnClickOption = (optionName) => {
    
    console.log(optionName);
    navigate(optionName)
  };
  const profileIcon = (
    <div className="icon-container">
      <i class="fa-solid fa-user fa-2xl"></i>
    </div>
  );

  return (
    <div className="Navbar">
      <div className="NavbarColOne">
        <div>
          <i class="fa-solid fa-bars fa-xl"></i> Menu
        </div>
        <div
          onClick={() => {
            handleOnClickOption("/");
          }}
        >
          <i class="fa-solid fa-house fa-xl"></i> Home
        </div>
        <div
          onClick={() => {
            handleOnClickOption("/blog");
          }}
        >
          <i class="fa-solid fa-blog fa-xl"></i> Blog
        </div>
      </div>
      <div className="NavbarColTwo">
        <div className="NavbarSearchBar">
          <input type="text" />
        </div>
      </div>
      <div className="NavbarColThree">
        <div
          // onClick={() => {
          //   handleOnClickOption("/my-learning");
          // }}
        >
          <HoverWrapper
            label="My Learning"
            HoverContent={HoverContentMyLearning}
            toolTipWrapperWidth="600px"
          />
        </div>
        <div
          // onClick={() => {
          //   handleOnClickOption("/profile");
          // }}
        >
          <HoverWrapper
            label={profileIcon}
            HoverContent={HoverContentProfile}
            toolTipWrapperWidth="1000px"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
