import React, { useState } from "react";
import "../styles/Comments.css";
import profileIcon2 from "../images/profileIcon2.png";

const Comments = () => {
  // INTERGRATION IS PENDING

  // Sample API Response
  const commentsData = [
    {
      comment: "This is first comment",
      userId: 12121212,
      videoId: 89878989,
      userName: "Shreyas Lutade",
    },
    {
      comment: "This is first comment",
      userId: 12121212,
      videoId: 89878989,
      userName: "Shreyas Lutade",
    },
    {
      comment: "This is first comment",
      userId: 12121212,
      videoId: 89878989,
      userName: "Shreyas Lutade",
    },
    {
      comment: "This is first comment",
      userId: 12121212,
      videoId: 89878989,
      userName: "Shreyas Lutade",
    },
    {
      comment: "This is first comment",
      userId: 12121212,
      videoId: 89878989,
      userName: "Shreyas Lutade",
    },
    {
      comment: "This is first comment",
      userId: 12121212,
      videoId: 89878989,
      userName: "Shreyas Lutade",
    },
    {
      comment: "This is first comment",
      userId: 12121212,
      videoId: 89878989,
      userName: "Shreyas Lutade",
    },
    {
      comment: "This is first comment",
      userId: 12121212,
      videoId: 89878989,
      userName: "Shreyas Lutade",
    },
    {
      comment: "This is first comment",
      userId: 12121212,
      videoId: 89878989,
      userName: "Shreyas Lutade",
    },
  ];

  //Component hooks
  const [writeComment, setWriteComment] = useState("");
  const [commentsList, SetCommentsList] = useState(commentsData);

  //Action Functions
  const handleActionClick = (action) => {
    let newComment = {
      comment: writeComment,
      userId: 12121212,
      videoId: 89878989,
      userName: "Shreyas Lutade",
    };
    SetCommentsList((commentsList) => [...commentsList, newComment]);
  };

  const handleTextAreaOnChange = (e) => {
    setWriteComment(e.target.value);
  };
  return (
    <div className="Comments">
      <p className="commentHeader">Add a new comment</p>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={writeComment}
        className="commentsTextArea"
        onChange={handleTextAreaOnChange}
        placeholder="Add your comment"
      ></textarea>
      <button
        className="btnPostComment"
        onClick={() => {
          handleActionClick("addComment");
        }}
      >
        Post Comment
      </button>
      <p className="commentsCount">Comments({commentsList.length})</p>
      <hr />

      {commentsList.map((commentData) => {
        return (
          <div>
            <div className="addedComments">
              <div className="commentsProfileIcon">
                <img src={profileIcon2} alt="" />
              </div>

              <div className="addedComment">
                <div className="profileCommentName">
                  {commentData.userName} <span>23-10-1993</span>
                </div>
                <div className="profileComment">{commentData.comment}</div>
                <button className="replyButtonComment">Reply</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
