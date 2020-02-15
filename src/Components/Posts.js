import React from "react";
import Post from "./Post";

const Posts = ({posts}) => {
  console.log(posts)
  posts = posts.map(post => {
    return(
      <div className={"posts"}>
        {post.title}
        <br></br>
        {post.description}
      </div>
    )
  })
  return(
    <div className={"postContainer"}>
      <ul>
        <h2>Posts</h2>
        {posts}
      </ul>
    </div>
  )
}

export default Posts;