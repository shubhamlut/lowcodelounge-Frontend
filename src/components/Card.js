import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Card.css";

const Card = ({ courseId, cardLabel, cardDesc, courseDesc, thumbnail }) => {
  const navigate = useNavigate();
  //Action Functions
  const handleButtonClick = (courseViewer) => {
    navigate(courseViewer);
  };
  //Component JSX
  return (
    <div className="card">
      <div className="cardPicture">
        <img src={thumbnail} alt="Description of the image" />
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
                handleButtonClick(`/courseViewer?courseId=${courseId}`);
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
