import React from "react";
import NavBar from "./Components/NavBar"
import UserProfile from "./Components/UserProfile"
import Posts from "./Components/Posts"
import Contacts from "./Components/Contacts"

import "./index.css";

const App = () => {
  return (
    <>
      <div id="div-nav-bar">
        <NavBar />
      </div>
      <div id="div-user-profile">
        <UserProfile />
      </div>
      <div id="div-posts">
        <Posts />
      </div>
      <div id="div-contacts">
        <Contacts />
      </div>
    </>
  )
}

export default App;
