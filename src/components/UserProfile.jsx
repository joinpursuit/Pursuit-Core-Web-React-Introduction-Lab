/*
Joseph P. Pasaoa
UserProfile Component | React Introduction Lab
*/


/* IMPORTS */
    // components
import React from 'react';
    // css
// import '../../Styles/Sitewide.css';
import './UserProfile.css';
    // helpers
const { data } = require('../utils/helpers.js');


/* COMPONENT */
class UserProfile extends React.Component {
  render() {
    return (
      <div className="comp-container">
        <div className="comp" id="userprofile">
          <div className="profcard">
            <img className="avatar" src={(data.user.avatar_url)} alt="user avatar"></img>
            <div>
              <h3>{data.user.name}</h3>
              <strong>{data.user.position}</strong>
              <em>{data.user.network}</em>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default UserProfile;
