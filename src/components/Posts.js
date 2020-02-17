import React from 'react';
import '../master/Posts.css';
import Post from './Post';
class Posts extends React.Component {
    render(){
        return(
            <div className="Posts">
                <div id="postContainer">
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        )
    }
}

export default Posts;