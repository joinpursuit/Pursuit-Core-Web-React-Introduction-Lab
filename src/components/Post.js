import React from 'react';

const Post = ({ title, caption }) => {
    return(
        <div className={"person"}>
            Title: {title},
            Caption: {caption}
        </div>
    )
}

export default Post;