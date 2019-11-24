import React from 'react'
import './UserProfile.css';


class UserProfile extends React.Component{
	render(){
		return (
				<div className = 'userProfileDiv'>
					<img src = 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png' className ='default-pic'/>
					<div className = 'userProfileDesc'>
						<b>Jordan Walke</b>
						<p>React Creator</p>
						<i>Lorem ipsum</i>
					</div>
				</div>
			)
	}
}






export default UserProfile;