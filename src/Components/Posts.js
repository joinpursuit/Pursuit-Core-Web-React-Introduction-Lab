import React from 'react';
import SinglePost from './Post.js';

const Posts = () => {
    return (
        <div className='posts'>
            <h2>Posts</h2>
            <SinglePost/>
            <SinglePost/>
            <SinglePost/>
        </div>
    )
}

export default Posts;