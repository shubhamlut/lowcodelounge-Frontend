import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CardMyLearning.css";

const CardMyLearning = ({
  courseId,
  cardLabel,
  cardDesc,
  courseDesc,
  thumbnail,
}) => {
  const navigate = useNavigate();
  //Action Functions
  const handleButtonClick = (courseId, courseViewer) => {
    navigate(courseViewer);
    console.log(courseId);
  };
  //Component JSX
  return (
    <div className="myLearningCard">
      <div className="myLearningCardPicture">
        <img src={thumbnail} alt="Description of the image" />
      </div>
      <div
        key={courseId}
        onClick={() => {
          handleButtonClick(courseId, `/courseViewer?courseId=${courseId}`);
        }}
        className="myLearningCardDetails"
      >
        <div className="myLearningCardDetailsColOne">
          <div className="myLearningCardLabel">{cardLabel}</div>
          <div className="myLearningCardDesc">{cardDesc}</div>
          <div className="learningCourseDesc">{courseDesc}</div>
        </div>
      </div>
    </div>
  );
};

export default CardMyLearning;
