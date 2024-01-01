import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../styles/BlogFullScreen.css";
import crudFunction from "../functions/crud.js";
import { useLocation } from "react-router-dom";

const BlogFullScreen = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const blogId = queryParams.get("blogId");

  //Hooks

  useEffect(() => {
    fetchBlogById(blogId);
  }, [blogId]);

  const [blog, setBlog] = useState("");
  //functions
  const fetchBlogById = async (blogId) => {
    const blogData = await crudFunction.get(
      `http://localhost:5000/api/blogs/getBlog/${blogId}`
    );
    setBlog(blogData[0]);
  };

  return (
    <div>
      <Navbar />
      <div className="BlogFullScreen">
        <div className="blogContainer">
          <div className="BlogFSTitle">
            <h1>{blog.blogTitle}</h1>
          </div>
          <div className="BlogFS">
           {blog.blog}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogFullScreen;
