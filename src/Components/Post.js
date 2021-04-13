import React from "react";

const postInfo = {
    title: "Title",
    description: "Lorem Ipsem"
}

const Post = () => {
    return (
        <div>
            <h2>{postInfo.title}</h2>
            <p>{postInfo.description}</p>
        </div>
    )
}

export default Post;