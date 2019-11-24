import React from 'react';
import './Post.css';

class Post extends React.Component{
	render() {
		return (
			<div className ='post'>
				<h4 className = 'post-title'>Title</h4>
				<i>Lorem ipsum</i>
			</div>
			)
	}
}



export default Post;