import React from 'react';
import Post from './Post';

const Posts = ({ posts }) => {
    posts = posts.map(post => {
        return <Post title={post.title} key={post.title} caption={post.caption} />
    })
    return(
       <ul>
           {posts}
       </ul>
    )
}

export default Posts;