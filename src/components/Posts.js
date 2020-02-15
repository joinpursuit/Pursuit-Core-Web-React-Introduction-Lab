import React from 'react';
import Post from './Post';

const Posts = ({ posts }) => {
    posts = posts.map(post => {
        return <Person name={post.name} key={post.name} />
    })
    return(
       <ul>
           {posts}
       </ul>
    )
}

export default Posts;