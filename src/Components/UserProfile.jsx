import React from 'react';
import logo from '../logo.svg';

class UserProfile extends React.Component {
    render() {
        return (
            <div className='UserProfile'>
                <img src={logo} alt=""/>
                <h2>My name is slim shady</h2>
                <h3>My name is slim shady</h3>
                <p>My name is slim shady</p>
            </div>
        )
    }
}

export default UserProfile;