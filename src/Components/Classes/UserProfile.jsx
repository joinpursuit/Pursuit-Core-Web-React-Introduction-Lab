/*
Joseph P. Pasaoa
UserProfile Component | React Introduction Lab
*/


/* IMPORTS */
    // helpers
import { log } from '../Helpers.jsx';
    // components
import React from 'react';
    // css
import '../../Styles/Sitewide.css';
import '../../Styles/UserProfile.css';


/* DATA SIM */
const userData = {
  name: "Jung Rae Jang",
  position: "React Assistant",
  network: "Lorem Ipsem",
  avatar_url: require('../../FauxDb/avatar-ph-user.png')
}


/* COMPONENT */
class UserProfile extends React.Component {
  render() {
    return (
      <div className="comp-container">
        <div className="comp" id="userprofile">
          <div className="profcard">
            <img className="avatar" src={(userData.avatar_url)} alt="user avatar"></img>
            <div>
              <h3>{userData.name}</h3>
              <strong>{userData.position}</strong>
              <em>{userData.network}</em>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default UserProfile;
