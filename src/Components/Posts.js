import React from "react"
import Post from "./Post"
import "../styling/Posts.css"

const Posts = () => {
    return (
        <section className="Posts">
            <h1>Posts</h1>
            <Post/>
            <Post/>
            <Post/>
        </section>
    )
}

export default Posts