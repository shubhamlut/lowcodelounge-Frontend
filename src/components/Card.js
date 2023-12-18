import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Card.css";

const Card = ({ courseId, cardLabel, cardDesc, courseDesc }) => {
  const navigate = useNavigate();
  //Action Functions
  const handleButtonClick = (courseId, courseViewer) => {
    navigate(courseViewer);
    console.log(courseId);
  };
  //Component JSX
  return (
    <div className="card">
      <div className="cardPicture">
        <img
          src="https://2829105.fs1.hubspotusercontent-na1.net/hubfs/2829105/Featured%20Image%20Homepage%20Logo%20ONLY.png"
          alt="Description of the image"
        />
      </div>
      <div className="cardDetails">
        <div className="cardDetailsColOne">
          <div className="cardLabel">{cardLabel}</div>
          <div className="cardDesc">{cardDesc}</div>
          <div className="courseDesc">{courseDesc}</div>
          <div className="cardButton">
            <button
              key={courseId}
              onClick={() => {
                handleButtonClick(courseId, "/courseViewer");
              }}
            >
              Start Watching
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
