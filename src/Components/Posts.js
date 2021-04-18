import React from 'react'
import './Posts.css'
import PostPage from './Post';


function Post() {
    return (
    <div className='postPage'>
        <div>
            <h1 className='heading'>Posts</h1>
        </div>
        <div>
            <PostPage />
        </div>
        <div>
            <PostPage />
        </div>
        <div>
            <PostPage />
        </div>
    </div>
    )
}
export default Post