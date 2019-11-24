import React from 'react';
import logo from '../logo.svg';
import './UserProfile.css';

class UserProfile extends React.Component {
    render() {
        return (
            <div className='UserProfile'>
                <div className='userimg'><img src={logo} alt=""/></div>
                <div className='userinfo'>
                    <h2>My name is slim shady</h2>
                    <h3>My name is slim shady</h3>
                    <p>My name is slim shady</p>
                </div>
            </div>
        )
    }
}

export default UserProfile;