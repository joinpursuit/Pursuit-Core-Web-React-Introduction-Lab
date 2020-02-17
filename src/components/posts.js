import React from "react"
import "../css/Posts.css"
//post takes a title and a comment

const Post = ({title, comment}) =>{
    return(
        <div className = "post">
            <h3>{title}</h3>
            <p>{comment}</p>
        </div>
    )
}
export default Post