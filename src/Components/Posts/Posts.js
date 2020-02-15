import React from 'react';
import './post.css'
const Posts = (props) => {
    return (
        <div className={"onePost"}>
            Tile: {props.title},
            Summary: {props.summary}
        </div>
    )
}

export default Posts;