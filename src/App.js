/*
Joseph P. Pasaoa
App | React Introduction Lab
*/


/* IMPORTS */
    // components
import React from 'react';
import NavBar from './components/NavBar.jsx';
import UserProfile from './components/UserProfile.jsx';
import Posts from './components/Posts.jsx';
import Contacts from './components/Contacts.jsx';
    // css
// import './Sitewide.css';
import './App.css';
    // helpers
// let { log, counter } = require('../helpers.js');


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
