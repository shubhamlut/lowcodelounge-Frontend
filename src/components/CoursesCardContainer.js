import React from "react";
import "../styles/coursesCardContainer.css";
import Card from "./Card";

const coursesCardContainer = () => {
  return (
    <div className="coursesCardContainer">
      <h1 className="heading">Recommended Courses</h1>
      <div className="coursesCardWrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        
      </div>
    </div>
  );
};

export default coursesCardContainer;
