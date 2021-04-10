
import "./Post.css";

// import React from 'react'
// export default function Post() {
//     return (
        // <div className="Post">
        //     <h1>Title</h1>
        //     <p>Lorem Ipsem</p>
        // </div>
//     )
// }


import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        return (
            <div className="Post">
                <h1>Title</h1>
                <p>Lorem Ipsem</p>
            </div>
        )
    }
}

