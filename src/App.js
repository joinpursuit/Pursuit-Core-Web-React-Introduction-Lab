import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import UserProfile from "./components/UserProfile";
import Posts from "./components/Posts";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="App">
      <>
        <NavBar />
      </>
      <div id="container">
        <div id="left-container">
          <>
            <UserProfile />
          </>
          <>
            <Posts />
          </>
        </div>
        <>
          <Contacts />
        </>
      </div>
    </div>
  );
}

export default App;
