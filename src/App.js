import React from "react";
import NavBar from "./Components/NavBar.js"
import UserProfile from "./Components/UserProfile.js"
import Contacts from "./Components/Contacts"
import Posts from "./Components/Posts"
import "./index.css";

const App = () => {
  return (
    <>
    <NavBar/>
    <UserProfile/>
    <Contacts/>
    <Posts/>
    </>
  );
}

export default App;
