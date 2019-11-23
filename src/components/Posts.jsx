import React from 'react';
import './Posts.css'

class Posts extends React.Component{

render(){
    return(
        <div className = 'mainContainer'>
            <h2>Posts</h2>
            <div className ="post">
                <h2>Title</h2>
                <p>Lorem Ipsem</p>
            </div>
            <div className ="post">
                <h2>Title</h2>
                <p>Lorem Ipsem</p>
            </div>
            <div className ="post">
                <h2>Title</h2>
                <p>Lorem Ipsem</p>
            </div>
        </div>
    )
}



}

export default Posts;