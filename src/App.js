import React from "react";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Post";
import Contacts from "./Components/Contacts";
import "./index.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <UserProfile />
    </React.Fragment>
  );
}

export default App;
