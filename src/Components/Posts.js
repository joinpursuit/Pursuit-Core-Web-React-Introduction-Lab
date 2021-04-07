import React from "react";
import Post from "./Post"
import "../styles/posts.css"
const Posts = () =>{
    return (
        <div className="posts">
            <h1>Posts</h1>
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Posts
