import React, { useEffect, useState } from "react";
import "../styles/Comments.css";
import profileIcon2 from "../images/profileIcon2.png";
import Reply from "./Reply";
import AddedReplyComment from "./AddedReplyComment";
const crudFunctions = require("../functions/crud");
const moment = require("moment");

const Comments = ({ videoId }) => {
  //Component hooks
  const [writeComment, setWriteComment] = useState("");
  const [commentsList, SetCommentsList] = useState([]);
  const[commentsCount,setCommentsCount] = useState(0)
  const [activeCommentId, setActiveCommentId] = useState(null);
  const [replyWindowActive, setreplyWindowActive] = useState(true);
  const [chevron, setChevron] = useState("down");
  const [showReplies, setShowReplies] = useState(true);

  useEffect(() => {
    fetchVideoComments();
  }, []);

  // useEffect(() => {
  //   const test = buildCommentTree(commentsList, "NA");
  //   SetCommentsList(test)
  // }, [commentsList]);

  // INTERGRATION

  //Action Functions
  // #1
  const handleActionClick = (action) => {
    let newComment = {
      comment: writeComment,
      userId: localStorage.getItem("userId"),
      videoId: videoId,
      parentCommentId: "NA",
      userName: localStorage.getItem("userName"),
    };
    //Updating the UI
    // SetCommentsList((commentsList) => [...commentsList, newComment]);

    //Updating the DB
    crudFunctions.create(
      "http://localhost:5000/api/comments/addComment",
      newComment
    );

    fetchVideoComments();
  };

  // #2
  // const fetchVideoComments = async () => {
  //   const response = await crudFunctions.get(
  //     `http://localhost:5000/api/comments/getComments/${videoId}`
  //   );
  //   const formattedComments = await buildCommentTree(commentsList, "NA");
  //   console.log(formattedComments);
  //  SetCommentsList(response)
  // };
  //HERE I SPENT more time than expected
  const fetchVideoComments = async () => {
    const response = await crudFunctions.get(
      `http://localhost:5000/api/comments/getComments/${videoId}`
    );
    const formattedComments = await buildCommentTree(response, "NA");
    SetCommentsList(formattedComments);
    setCommentsCount(formattedComments.length)
  };

  //#3
  const handleTextAreaOnChange = (e) => {
    setWriteComment(e.target.value);
  };

  // #4
  const handleReplyOnComment = (commentId) => {
    setActiveCommentId(commentId);
    setreplyWindowActive(true);
  };

  //#5
  const handleButtonClickAction = (action) => {
    if (action === "viewreplies") {
      if (chevron === "down") {
        setChevron("up");
        setShowReplies(true);
      } else {
        setChevron("down");
        setShowReplies(false);
      }
    } else if (action === "cancelreply") {
      setreplyWindowActive(false);
    }
  };

  //#6

  const buildCommentTree = async (comments, parentId) => {
    const childComments = comments.filter(
      (comment) => comment.parentCommentId === parentId
    );

    if (childComments.length === 0) {
      return [];
    }

    const children = await Promise.all(
      childComments.map(async (comment) => {
        const nestedChildren = await buildCommentTree(comments, comment._id);

        if (nestedChildren) {
          return { ...comment, children: nestedChildren };
        }

        return comment;
      })
    );

    return children;
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
      { commentsCount >0 &&
        <>
      <p className="commentsCount">
        {commentsList.length
          ? `Comments ${commentsList.length}`
          : "Comments (0)"}
      </p>

      <hr />

      {commentsList.map((commentData) => {
        return (
          <div key={commentData._id}>
            <div className="addedComments">
              <div className="commentsProfileIcon">
                <img src={profileIcon2} alt="" />
              </div>

              <div className="addedComment">
                <div className="profileCommentName">
                  {commentData.userName}
                  <span>
                    {moment.utc(commentData.addedOn).format("DD MMM YY")}
                  </span>
                </div>
                <div className="profileComment">{commentData.comment}</div>
                <button
                  onClick={() => {
                    handleReplyOnComment(commentData._id);
                  }}
                  className="replyButtonComment"
                >
                  Reply
                </button>
                {/* This is used to comment reply window */}
                {activeCommentId === commentData._id && (
                  <Reply
                    replyWindowActive={replyWindowActive}
                    setreplyWindowActive={setreplyWindowActive}
                    parentCommentId={commentData._id}
                    videoId={videoId}
                    fetchVideoComments={fetchVideoComments}
                  />
                )}
                {/* This piece of code is used to show "View replies" button which list the replied comments */}
                {commentData.children && commentData.children.length > 0 && (
                  <>
                    <div
                      onClick={() => {
                        handleButtonClickAction("viewreplies");
                      }}
                      className="viewReplies"
                    >
                      <i class={`fa-solid fa-chevron-${chevron}`}></i>
                      <span className="replyCount">
                        {commentData.children.length}{" "}
                        {commentData.children.length === 1
                          ? "Reply"
                          : "Replies"}
                      </span>
                    </div>
                    {showReplies &&
                      commentData.children.map((childComment) => {
                        return (
                          <div className="replyAddedTextContainer">
                            <AddedReplyComment
                              userName={childComment.userName}
                              comment={childComment.comment}
                              addedOn={moment
                                .utc(childComment.addedOn)
                                .format("DD MMM YY")}
                            />
                          </div>
                        );
                      })}
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
      </>
      }
    </div>
  );
};

export default Comments;
