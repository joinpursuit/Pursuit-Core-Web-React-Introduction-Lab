import React from 'react';
import Post from './Post';
import './Post.css'

class PostBody extends React.Component{
    render(){
        return(
            <div className='PostInfo'>
                <h1>Posts</h1>
                <Post/>
                <Post/>
                <Post/>
            </div>
        )
    }
}















export default PostBody;