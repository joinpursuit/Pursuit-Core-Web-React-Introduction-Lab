import React from "react";
import NavBar from "./Components/NavBar.js";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts.js"
import Contacts from "./Components/Contacts.js"

import "./index.css";


function App () {
  return (
    <>
    <NavBar />
    <UserProfile />
    <Posts />
    <Contacts />
    </>
  )
}


export default App;
