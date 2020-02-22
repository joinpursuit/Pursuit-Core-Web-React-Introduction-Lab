import React from 'react';
import '../CSS/PostFeed'

//need to iterate through user post feed here

const Posts = (post) => {
    return (
        <div className='Post'>
            <div id="title"> {post.title} </div>
            <div> {post.body} </div>
        </div>
    )
}

export default Post;