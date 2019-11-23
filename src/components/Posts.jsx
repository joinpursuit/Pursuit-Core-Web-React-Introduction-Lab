import React from "react";
import Post from "../components/Post";
import "../styles/Posts.css";

class Posts extends React.Component {
  render() {
    return (
      <div className="posts">
        <h3 className="title">Posts</h3>
        <Post />
        <Post />
        <Post />
      </div>
    );
  }
}

export default Posts;
