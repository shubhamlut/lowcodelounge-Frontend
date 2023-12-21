import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HoverWrapper from "./HoverWrapper";
import AppBody from "./AppBody";
import VideoSection from "./VideoSection";
import WelcomePage from "./WelcomePage";
import CoursesCardContainer from "./CoursesCardContainer";
import Loginscreen from "./Loginscreen";

const Home = () => {
  return (
    <div>
      <Navbar />
      <WelcomePage />
      <CoursesCardContainer />
    </div>
  );
};

export default Home;
