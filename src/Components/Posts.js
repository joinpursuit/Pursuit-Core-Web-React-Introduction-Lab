import React from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = () => {
  return (
    <div className="Posts">
      <h3>Posts</h3>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
