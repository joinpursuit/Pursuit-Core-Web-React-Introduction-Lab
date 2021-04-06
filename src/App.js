import React from "react";
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile"
import Contact from "./Components/Contacts"


import "./index.css";

const App = () => {
  return (
    <>
    <NavBar />
    <Posts/>
    <UserProfile />
    <Contact />
    </>
  );
 
}

export default App;
