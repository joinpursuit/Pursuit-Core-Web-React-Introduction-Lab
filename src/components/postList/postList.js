import React from 'react';
import Post from "./posts/post";
import "../../css/post.css"
const PostList = ({post}) =>{
    post= post.map(post =>{
        return <Post post_id={post.post_id} title={post.title} content ={post.content} key={post.post_id}/>
    })

    return(
        <div className="PostList">
        <h1>Posts</h1>
        {post}
        </div>
    )
}
export default PostList;