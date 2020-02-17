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

      <>
        <UserProfile />
      </>

      <>
        <Posts />
      </>

      <>
        <Contacts />
      </>
    </div>
  );
}

export default App;
