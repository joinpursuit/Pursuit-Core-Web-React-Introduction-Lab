import React from 'react';
import Post from './Post';
import "./Posts.css";

function Posts () {
    return (
        <div id = "posts" className="heading">
            <p className = "heading">Posts</p>
            <Post/>
            <Post/>
            <Post/>
        </div>
            
    )
}

export default Posts



