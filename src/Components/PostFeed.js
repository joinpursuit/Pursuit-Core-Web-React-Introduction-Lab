import React from 'react';
import '../CSS/PostFeed'
import Post from './Post'
aa

const Posts = (post) => {
    return (
        <div className='PostList'>
            <Post className={post}/>
        </div>
    )
}

export default PostFeed;