import React from "react";
import Post from "./Post";
import "../styles/posts.css"

function Posts() {
  return (
    <section className="posts">
      <h2>Posts</h2>
      <section>
        <Post />
        <Post />
        <Post />
      </section>
    </section>
  );
}

export default Posts;
