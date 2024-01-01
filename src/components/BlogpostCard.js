import React from "react";
import "../styles/BlogpostCard.css";
import profileIcon2 from "../images/profileIcon2.png";
import { useNavigate } from "react-router-dom";

const moment = require("moment");
const BlogpostCard = ({ blogTitle, blog, addedOn,blogId }) => {

  //Hooks

  const navigate = useNavigate()
  //functions

  const trimToWords = (originalText, wordLimit) => {
    const words = originalText.split(/\s+/);
    const trimmedWords = words.slice(0, wordLimit);
    return trimmedWords.join(" ");
  };
  return (
    <div className="blogpostcard">
      <div className="blogTitle">{blogTitle}</div>
      <div className="blogProfile">
        <div className="blogprofileName">- Shubham Lutade</div>
        <div className="blogAddedOn">
          {moment.utc(addedOn).format("DD MMM YY")}
        </div>
      </div>
      <div className="blogContentBody">{trimToWords(blog, 80)}...</div>
      <div className="btnBlogReadMore">
        <button onClick={()=>{
          navigate(`/blogpost?blogId=${blogId}`)
        }}>Read more</button>
      </div>
    </div>
  );
};

export default BlogpostCard;
