import React from "react"

const postInfo = {
    title: "Title",
    location: "Lorem Ipsem"
}

const Post = () => {
    return (
        <div className="post-info">
            <p>{postInfo.title}</p>
            <p>{postInfo.location}</p>
        </div>
    )
}



export default Post;