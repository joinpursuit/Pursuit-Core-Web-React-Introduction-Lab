import React from 'react';
import Post from "./posts/post";

const PostList = ({post}) =>{
    post= post.map(post =>{
        return <Post title={post.title} content ={post.content} key={post.title}/>
    })

    return(
        <div>
        {post}
        </div>
    )
}
export default PostList;