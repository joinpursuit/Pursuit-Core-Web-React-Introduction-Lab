import React from 'react';

const Post = ({title,content})=>{
    return(
        <div className={"Post"}>
         <h4>{title}</h4>
         <p>{content}</p>
        </div>
    )
}
export default Post