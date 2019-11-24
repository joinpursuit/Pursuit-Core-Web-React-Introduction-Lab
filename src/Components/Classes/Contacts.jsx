/*
Joseph P. Pasaoa
Contacts Component | React Introduction Lab
*/


/* IMPORTS */
    // helpers
import { log } from '../Helpers.jsx';
    // components
import React from 'react';
    // css
import '../../Styles/Sitewide.css';
import '../../Styles/Contacts.css';


/* DATA SIM */
const userData = [
  {
    name: "Alejandro Franco",
    position: "React Expert",
    network: "Lorem Ipsem",
    avatar_url: require('../../FauxDb/avatar-ph-1.png')
  },
  {
    name: "Dessa Shepherd",
    position: "React Manager",
    network: "Lorem Ipsem",
    avatar_url: require('../../FauxDb/avatar-ph-2.png')
  },
  {
    name: "Wynter Reid",
    position: "React Assistant",
    network: "Lorem Ipsem",
    avatar_url: require('../../FauxDb/avatar-ph-3.png')
  },
  {
    name: "David Yang",
    position: "Co-Founder",
    network: "Lorem Ipsem",
    avatar_url: require('../../FauxDb/avatar-ph-4.png')
  },
  {
    name: "Jukay Hsu",
    position: "Co-Founder",
    network: "Lorem Ipsem",
    avatar_url: require('../../FauxDb/avatar-ph-4.png')
  }
];


/* COMPONENT */
class Contacts extends React.Component {
  render() {
    return (
      <div className="comp-container" id="comp-contacts">
        <div className="comp" id="contacts">
          <h2>Contacts</h2>
          <div className="profcard">
            <img className="avatar" src={(userData[0].avatar_url)} alt="user avatar"></img>
            <div>
              <h3>{userData[0].name}</h3>
              <strong>{userData[0].position}</strong>
              <em>{userData[0].network}</em>
            </div>
          </div>
          <div className="profcard">
            <img className="avatar" src={(userData[1].avatar_url)} alt="user avatar"></img>
            <div>
              <h3>{userData[1].name}</h3>
              <strong>{userData[1].position}</strong>
              <em>{userData[1].network}</em>
            </div>
          </div>
          <div className="profcard">
            <img className="avatar" src={(userData[2].avatar_url)} alt="user avatar"></img>
            <div>
              <h3>{userData[2].name}</h3>
              <strong>{userData[2].position}</strong>
              <em>{userData[2].network}</em>
            </div>
          </div>
          <div className="profcard">
            <img className="avatar" src={(userData[3].avatar_url)} alt="user avatar"></img>
            <div>
              <h3>{userData[3].name}</h3>
              <strong>{userData[3].position}</strong>
              <em>{userData[3].network}</em>
            </div>
          </div>
          <div className="profcard">
            <img className="avatar" src={(userData[4].avatar_url)} alt="user avatar"></img>
            <div>
              <h3>{userData[4].name}</h3>
              <strong>{userData[4].position}</strong>
              <em>{userData[4].network}</em>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Contacts;
