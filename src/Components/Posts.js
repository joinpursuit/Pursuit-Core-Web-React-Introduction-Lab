import React from "react"
import Post from './Post.js'
import "../styles/Posts.css"


const Posts = () => {
    return (
        <div className = "Posts">
            <h2>Posts</h2>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}
export default Posts;