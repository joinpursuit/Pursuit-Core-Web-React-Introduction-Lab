import React from "react"
// import "../../css/posts.css"

//post takes a title and a comment

const Post = ({title, comment}) =>{
    return(
        <div className = "post">
            <h1>
                {title}
                {comment}
            </h1>
        </div>
    )
}
export default Post