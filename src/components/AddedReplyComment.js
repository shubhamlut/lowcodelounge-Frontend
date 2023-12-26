import React from "react";
import "../styles/Comments.css";
import profileIcon2 from "../images/profileIcon2.png";
const AddedReplyComment = ({ userName, comment,addedOn }) => {
  return (
    <div className="addedComments">
      <div className="commentsProfileIcon">
        <img src={profileIcon2} alt="" />
      </div>

      <div className="addedComment">
        <div className="profileCommentName">
          {userName} <span>{addedOn}</span>
        </div>
        <div className="profileComment">{comment}</div>
        
      </div>
    </div>
  );
};

export default AddedReplyComment;
