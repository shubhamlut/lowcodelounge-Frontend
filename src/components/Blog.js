import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/Blog.css";
import blogBackgroundWallpaer from "../images/blogWall3.jpeg";
import BlogpostCard from "./BlogpostCard";
import crudFunctions from "../functions/crud.js";
const Blog = () => {
  //hooks

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  const [blogs, setBlogs] = useState("");
  //functions

  const fetchAllBlogs = async () => {
    const retrievedblogs = await crudFunctions.get(
      "http://localhost:5000/api/blogs/getBlogs"
    );
    setBlogs(retrievedblogs);
  };

  return (
    <div>
      <Navbar />
      <div className="blogPageContainer">
        <div className="blogWallpaper">
          <img src={blogBackgroundWallpaer} alt="" />
        </div>
        <div className="blogPageHeader">
          <h2>All my articles</h2>
        </div>
        {blogs && (
          <div className="blogCardContainer">
            {blogs.map((blog) => {
              return (
                <BlogpostCard
                  blogTitle={blog.blogTitle}
                  blog={blog.blog}
                  addedOn={blog.addedOn}
                  blogId = {blog._id}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
