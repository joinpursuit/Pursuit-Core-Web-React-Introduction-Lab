import React from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = () => {
  return (
    <div className="Posts">
      <h1>Posts</h1>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
