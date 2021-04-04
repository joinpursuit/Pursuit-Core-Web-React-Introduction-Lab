import React from "react";
import Post from "./Post";
import "../styling/Posts.css";

class Posts extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section className="Posts">
        <h1>Posts</h1>
        <Post />
        <Post />
        <Post />
      </section>
    );
  }
}

export default Posts;
