import React from 'react';
import '../master/UserProfile.css';
import Profile_image from '../imgs/profile_img.png';

class UserProfile extends React.Component {
    render(){
        return(
            <div className="userProfile">
                <div id="userInfo">
                    <img src={Profile_image}></img>
                    <h3>Jordan Walker</h3>
                    <p>React Developer</p>
                    <p>Lorem Ipsem</p>
                </div>
            </div>
        )
    }
}

export default UserProfile;