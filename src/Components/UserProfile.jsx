import React from 'react';

import './UserProfile.css'

class UserProfile extends React.Component {
    render() {
        return(
            <div className="user-profile">
                <img src="https://avatars1.githubusercontent.com/u/52139563?s=460&v=4" alt="Douglas MacKrell Avatar"></img>
                <h2> Douglas MacKrell </h2>
                <h3> Full Stack Web Developer </h3>
                <p> Douglas MacKrell is a golden voiced and creatively minded Full Stack Web Developer. Those who do not fear him, admire him. And those who admire him demand smooches and high fives on the regular. He'll tell them to line up, separating into three groups: Smooches, High Fives, and Both. </p>
            </div>
        )
    }

}

export default UserProfile;