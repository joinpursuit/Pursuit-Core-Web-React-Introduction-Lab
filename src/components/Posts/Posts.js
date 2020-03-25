import React from 'react';
import Post from '../Post/Post';
import './Posts.css'

const Posts = () => {

    return(
        <div className="parentPost">
            <h3>Posts</h3>
            <Post />
        </div>
    )
}

export default Posts;