import React from 'react';

const Post = ({post_id,title,content})=>{
    return(
        <div className={"Post"} id={post_id}>
         <h4>{title}</h4>
         <p>{content}</p>
        </div>
    )
}
export default Post