import React from 'react' 
import Post from './Post'

function Posts () {
    return (
        <div id="posts" class = "heading">
            <p class = "heading">Posts</p>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Posts