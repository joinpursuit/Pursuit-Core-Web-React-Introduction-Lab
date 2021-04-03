import React from "react";
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";
import Posts from "./Components/Posts";
import NavBar from "./Components/NavBar";

import "./index.css";

function App() {
  return (
    <div className="profilePage">
      <div className="pageNavigation">
        <NavBar />
      </div>
        <div className="profilePosts">
          <UserProfile />
          <Posts />
        </div>
        <div className="userContacts">
        <Contacts />
        </div>
    </div>
  );
}

export default App;
