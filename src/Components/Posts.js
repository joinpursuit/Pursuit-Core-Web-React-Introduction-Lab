import React from "react";
import { Post } from "./Post";

export function Posts() {
  return (
    <div id="posts">
      <h2>Posts</h2>
      <Post />
      <Post />
      <Post />
    </div>
  );
}
