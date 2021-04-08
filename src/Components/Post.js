import React from 'react';

const postObject = {
    title: 'Title',
    description: 'Lorem Ipsem'
}

const Post = () => {
    return (
        <div>
            <h2>{postObject.title}</h2>
            <p>{postObject.description}</p>
        </div>
    );
};

export default Post;