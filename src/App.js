import React from "react";

import "./index.css";
import Contacts from "./Components/Contacts"
import Nav from "./Components/NavBar"
import Posts from "./Components/Posts"
import UserProfile from "./Components/UserProfile"

const App = () => {
  return (
  <>
    <Nav/>
    <UserProfile/>
    <Posts/>
    <Contacts/> 
  </>
  
  );

    
}

export default App;
