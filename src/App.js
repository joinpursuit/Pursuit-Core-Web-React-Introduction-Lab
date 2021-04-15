import React from "react";
import "./index.css";
import Contacts from './Components/Contacts.js';
import NavBar from './Components/NavBar.js';
import Posts from './Components/Posts.js';
import UserProfile from './Components/UserProfile.js';

const App = () => {
  return (
    <div className="body">
      <NavBar/>
      <UserProfile/>
      <Posts/>
      <Contacts/>
    </div>
  )
}

export default App;
