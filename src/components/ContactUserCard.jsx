/*
Joseph P. Pasaoa
Single Contact User Card Component | React Introduction Lab
*/


/* IMPORTS */
    // components
import React from 'react';
    // css
import '../../Styles/Sitewide.css';
import '../../Styles/Contacts.css';
    // helpers
const { data } = require('../helpers.js');
let { contactNum } = require('../helpers.js');


/* COMPONENT */
class ContactUserCard extends React.Component {
  render() {
    contactNum += 1;
    return (
      <div className="profcard">
        <img className="avatar" src={(data.contacts[contactNum].avatar_url)} alt="user avatar"></img>
        <div>
          <h3>{data.contacts[contactNum].name}</h3>
          <strong>{data.contacts[contactNum].position}</strong>
          <em>{data.contacts[contactNum].network}</em>
        </div>
      </div>
    )
  }
}

export default ContactUserCard;
