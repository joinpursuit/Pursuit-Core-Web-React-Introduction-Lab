import React from "react";
import Post from "./Post";

let postArr = [<Post />, <Post />, <Post />];

const Posts = () => {
  return (
    <div className="posts">
      <h3>Posts</h3>
      {postArr}
    </div>
  );
};
export default Posts;
