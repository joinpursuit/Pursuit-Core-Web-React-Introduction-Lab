import Post from "./Post";
import "./Posts.css";

// import React from 'react';
// export default function Posts() {
//     return (
        // <div className="Posts">
        //     <h1>Posts</h1>
        //     <Post />
        //     <Post />
        //     <Post />
        // </div>
//     )
// }


import React, { Component } from 'react'

export default class Posts extends Component {
    render() {
        return (
            <div className="Posts">
                <h1>Posts</h1>
                <Post />
                <Post />
                <Post />
            </div>
        )
    }
}

