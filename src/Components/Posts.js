import React from "react"
import Post from './Post';
import "../styles/posts.css"

const Posts = () => {
    return (
        <main>
        <h2>Posts</h2>
        <Post />
        <Post />
        <Post />
        </main>
    )
}
export default Posts;