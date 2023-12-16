import React from "react";
import "../styles/WelcomePage.css";
import HomePageBackGround from "../images/homePageBackground.jpeg";

const WelcomePage = () => {
  return (
    <div className="WelcomePageWrapper">
      <div className="welcomeTextWrapper">
        <h1>
          Welcome to <span className="appNameLabel">LowCodeLounge</span>
        </h1>
        <p className="landingPageParagraph">
          Welcome to LowCodeLounge, where innovation meets excellence. We are
          more than just a product – we are a solution crafted with passion and
          precision. Join thousands of satisfied customers who have experienced
          the transformative power of our course. Our commitment to quality,
          backed by 3+ years of experience/industry expertise, ensures that you
          receive nothing short of exceptional. From seamless user experiences
          to cutting-edge features, we are dedicated to enhancing every facet of
          your Software industry. Explore the future with confidence. Your
          journey to success begins here.
        </p>
        <div className="welcomePageButtons">
          <button className="freeCourses">Free Courses</button>
          <button className="exploreBlog">Explore Blog</button>
        </div>
      </div>
      <div className="imagesWrapper">
        <img src={HomePageBackGround} alt="" />
      </div>
    </div>
  );
};

export default WelcomePage;
