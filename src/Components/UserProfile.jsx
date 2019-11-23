import React from 'react';
import './UserProfile.css';

class UserProfile extends React.Component {
    user = {
        name: "Jordan Walke",
        img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        title: "React Creator",
        bio: "Lorem Ipsem"
    }
    render() {
        return(
            <div className="userProfile">
                <img src={this.user.img}></img>
                <div className="info">
                    <h4>{this.user.name}</h4>
                    <h6>{this.user.title}</h6>
                    <p>{this.user.bio}</p>
                </div>
            </div>
        )
    }
}

export default UserProfile;