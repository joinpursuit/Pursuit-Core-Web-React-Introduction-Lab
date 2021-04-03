import React from "react"
import "../styling/Posts.css"

import Post from "./Post"

function Posts () {
    return (
        < div id="Posts">
        <h4 id="title-of-posts">Posts</h4>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        </div>
    )
}

export default Posts;