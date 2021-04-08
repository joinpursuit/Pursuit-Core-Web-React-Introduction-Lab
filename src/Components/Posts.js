import React from "react"
import Post from "./Post"
import "../App.css"

function Posts () {
    return (
        <section className="Posts">
            <h2>Posts</h2>
            <Post />
            <Post />
            <Post />
        </section>
    )
}

export default Posts;