import React from 'react';
import './post.css'
const Posts = (props) => {
    return (
        <div className={"Posts"}>
        <div className='PostList'>
            <div id="title">
            {props.title}
            </div>
            {props.summary}
            </div>
        </div>
    )
}

export default Posts;