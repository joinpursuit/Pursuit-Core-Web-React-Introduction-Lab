import React from 'react';
import './UserProfile.css';

const userProfile = (props) =>(
    <div className="userProfile">
        <div className="userProfile-picture">
            <div className="userProfile-summary">
                <h1>Kwon Ji-yong</h1>
                <h5>React Creator</h5>
                <p>This is a sample bio of React developer</p>
            </div>
        </div>
    </div>
)

export default userProfile;