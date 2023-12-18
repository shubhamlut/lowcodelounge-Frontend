import React from "react";
import "../styles/Comments.css";
import profileIcon2 from "../images/profileIcon2.png";
const AddedComment = ({ userName, comment }) => {
  return (
    <div className="addedComments">
      <div className="commentsProfileIcon">
        <img src={profileIcon2} alt="" />
      </div>

      <div className="addedComment">
        <div className="profileCommentName">
          {userName} <span>23-10-1993</span>
        </div>
        <div className="profileComment">{comment}</div>
        <button className="replyButtonComment">Reply</button>
      </div>
    </div>
  );
};

export default AddedComment;
