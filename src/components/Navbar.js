import React from "react";
import "../styles/Navbar.css";
import HoverWrapper from "./HoverWrapper";
import HoverContentProfile from "./HoverContentProfile";
import HoverContentMyLearning from "./HoverContentMyLearning";
import HoverContentContactUs from "./HoverContentContactUs";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo.js";

const Navbar = () => {
  const navigate = useNavigate();
  const handleOnClickOption = (optionName) => {
    console.log(optionName);
    navigate(optionName);
  };

  const profileIcon = (
    <div className="icon-container">
      <i class="fa-solid fa-user fa-2xl"></i>
    </div>
  );

  return (
    <div className="Navbar">
      <div className="NavbarColOne">
        <span
          onClick={() => {
            handleOnClickOption("/");
          }}
        >
          <Logo />
        </span>
      </div>

      {/* <div className="NavbarColTwo">
        <div className="NavbarSearchBar">
          <input type="text" />
        </div>
      </div> */}
      <div className="rightSideColumn">
        <div className="NavbarColThree">
          <div
            className="tooltip-container"
            onClick={() => {
              handleOnClickOption("/");
            }}
          >
            Home
          </div>
          <div
            className="tooltip-container"
            onClick={() => {
              handleOnClickOption("/blog");
            }}
          >
            Blog
          </div>
          <div>
            <HoverWrapper
              label="Connect with us"
              HoverContent={HoverContentContactUs}
              toolTipWrapperWidth="200"
              action={handleOnClickOption}
            />
          </div>
          <div>
            <HoverWrapper
              label="My Learning"
              HoverContent={HoverContentMyLearning}
              toolTipWrapperWidth="320"
              action={handleOnClickOption}
            />
          </div>
          <div>
            <HoverWrapper
              label="Profile"
              HoverContent={HoverContentProfile}
              toolTipWrapperWidth="250"
              action={handleOnClickOption}
            />
          </div>
        </div>
        {/* Logic to show/hide the login and signup button based on if user have
        logged in */}
        {!localStorage.getItem("token") && (
          <div className="NavbarColFour">
            <div className="tooltip-container">
              <button
                onClick={() => {
                  handleOnClickOption("/login");
                }}
                className="navbarBtn"
              >
                Login
              </button>
            </div>
            <div className="tooltip-container">
              <button
                onClick={() => {
                  handleOnClickOption("/signup");
                }}
                className="navbarBtn"
              >
                Signup
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
