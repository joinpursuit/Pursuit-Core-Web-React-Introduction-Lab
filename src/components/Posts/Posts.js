import React from 'react';
import Post from '../Post/Post';

const Posts = ({ posts }) => {
    posts = posts.map(post => {
        return <Post title={post.title} description = {post.description} key= {post.title}/>

    })
    return(
        <div>
            <h3>{posts}</h3>
        </div>
    )
}

export default Posts;