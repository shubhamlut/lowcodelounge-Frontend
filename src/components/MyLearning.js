import React from "react";
import "../styles/MyLearning.css"
import CardMyLearning from "./CardMyLearning";

const handleOnClickOption =(e)=>{
console.log(e.target.getAttribute('data-key'));

}

const MyLearning = () => {
  return (
    <div className="myLearningPage">
      <div className="learningPageHeader"> <h2>My Learning Page</h2></div>
      <div className="learningPageNavOptions">
        <div data-key="allcourses" onClick={handleOnClickOption} className="lpNavOpOne">All Courses</div>
        <div data-key="learningpaths" onClick={handleOnClickOption} className="lpNavOpOne">Learning Paths</div>
      </div>
      <div className="MylearningCourses">
       <CardMyLearning/>
       <CardMyLearning/>
       <CardMyLearning/>
       <CardMyLearning/>
       
       
      </div>
    </div>
  );
};

export default MyLearning;
