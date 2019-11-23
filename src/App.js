/*
Joseph P. Pasaoa
App | React Introduction Lab
*/


/* IMPORTS */
    // helpers
import { log } from './Components/Helpers.jsx';
    // components
import React from 'react';
import NavBar from './Components/Classes/NavBar.jsx';
import UserProfile from './Components/Classes/UserProfile.jsx';
import Posts from './Components/Classes/Posts.jsx';
import Contacts from './Components/Classes/Contacts.jsx';
    // css
import './Styles/Sitewide.css';
import './Styles/App.css';


/* BODY */
function App() {
  return (
    <div id="base-grid">
      <NavBar />
      <UserProfile />
      <Contacts />
      <Posts />
    </div>
  );
}


/* EXPORT */
export default App;
