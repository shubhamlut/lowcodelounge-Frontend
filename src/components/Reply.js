import React, { useState } from "react";
import "../styles/Reply.css";

const crudFunctions = require("../functions/crud");

const Reply = ({
  replyWindowActive,
  setreplyWindowActive,
  parentCommentId,
  videoId,
  fetchVideoComments
}) => {
  //Hooks

  const [reply, setReply] = useState("");

  //Functions

  //   #1
  const handleOnChangeReplyText = (e) => {
    setReply(e.target.value);
  };

  //#2
  const handleButtonClickAction = (action) => {
    if (action === "post") {
      addReply();
      setreplyWindowActive(false);
      fetchVideoComments()
    }
    else{
      setreplyWindowActive(false)
    }
  };

  //#3
  const addReply = async () => {
    const replyComment = {
      comment: reply,
      userId: localStorage.getItem("userId"),
      videoId: videoId,
      parentCommentId: parentCommentId,
      userName: localStorage.getItem("userName"),
    };
    const response = await crudFunctions.create(
      "http://localhost:5000/api/comments/addComment",
      replyComment
    );
  };

  //   #4

  const fetchComments = async () => {
    const reponse = crudFunctions.get(
      `http://localhost:5000/api/comments/getComments/${videoId}`
    );
  };
  return (
    <>
      {replyWindowActive && (
        <div className="replyComment">
          <div className="replyInput">
            <input
              type="text"
              onChange={handleOnChangeReplyText}
              value={reply}
            />
          </div>
          <div className="btnPostReply">
            <button
              onClick={() => {
                handleButtonClickAction("post");
              }}
            >
              Post
            </button>
          </div>
          <div
            onClick={() => {
              handleButtonClickAction("cancelreply");
            }}
            className="btnCancelReply"
          >
            <button>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Reply;
