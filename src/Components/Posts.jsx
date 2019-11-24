import React from 'react'

class Posts extends React.Component {
    render() {
        return (
            <div className= 'container'>
                <h4>Posts</h4>
                <div className= 'post'>
                    <h4>Title</h4>
                    <p>Lorem Ipsum</p>
                </div>
                <div className= 'post'>
                    <h4>Title</h4>
                    <p>Lorem Ipsum</p>
                </div>
                <div className= 'post'>
                    <h4>Title</h4>
                    <p>Lorem Ipsum</p>
                </div>
            </div>
        )
    }
}

export default Posts;