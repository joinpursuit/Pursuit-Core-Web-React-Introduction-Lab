import React from 'react';
import './PostBoard.css';
import Post from './Post.js';

class PostBoard extends React.Component{
	render(){
		return(
			<div className= 'postBoard'>
				<h2 className = 'post-title'>Posts</h2>
				<Post />
				<Post />
				<Post />
			</div>
			)
	}
}

export default PostBoard