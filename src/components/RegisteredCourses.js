import React from 'react'
import unqorkIcon from "../images/unqorkIcon.png";
import { useNavigate } from "react-router-dom";

const RegisteredCourses = () => {
    const navigate = useNavigate();
    const handleActionClick = () => {
        navigate("/my-learning");
      };
  return (
    <div>
       <div className="hovercontent">
        <div className="course">
          <div className="courseIcon">
            <img src={unqorkIcon} alt="" />
          </div>
          <div onClick={handleActionClick} className="courseDesc">
            Unqork Zero to Expert
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisteredCourses
