import React from 'react';

const userInfo = {
    name: 'Jordan Walke',
    job: 'React Creator',
    info: 'Lorem Ipsem'
}

const UserProfile = () => {
    return (
        <div className="user-profile">
            <img src='profile.png'></img>
            <h2>{userInfo.name}</h2>
            <h3>{userInfo.job}</h3>
            <p>{userInfo.info}</p>
        </div>
    )
}

export default UserProfile;