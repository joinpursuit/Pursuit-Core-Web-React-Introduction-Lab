import React from "react";
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";
import Posts from "./Components/Posts";
import NavBar from "./Components/NavBar";

import "./index.css";
// import "./Style.app.css"

function App() {
  return (
    <div className="profilePage">
      <NavBar />
      <div className="profilePosts">
        <UserProfile />
        <Posts />
      </div>
      <Contacts />
    </div>
  );
}

export default App;
