import React from "react";
import NavBar from "./Components/NavBar.js"
import UserProfile from "./Components/UserProfile.js"
import Posts from "./Components/Posts.js"
import Contacts from './Components/Contacts.js'

import "./index.css";

const App = () => {
  return (
    <div className="App">
    <NavBar />
    <UserProfile />
    <Posts />
    <Contacts />
    </div>
  )
}

export default App;
