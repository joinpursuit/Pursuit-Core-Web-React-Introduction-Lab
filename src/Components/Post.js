import React from 'react';

const postInfo = {
    title: 'Title',
    info: 'Lorem Ipsem'
}

const Post = () => {
    return (
        <div className='individual-post'>
            <h2>{postInfo.title}</h2>
            <p>{postInfo.info}</p>
        </div>
    )
}

export default Post;