import React from 'react';


const PostInfo = {
    Title: "Title",
    Description: "Lorem Ipsem"
}

const Post = () =>{
    return (
        <main>
            <h1>{PostInfo.Title}</h1>
            <p>{PostInfo.Description}</p>
        </main>
    )
}

export default Post;