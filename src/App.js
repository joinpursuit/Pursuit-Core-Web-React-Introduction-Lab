import React from "react";
import NavBar from './Components/Navbar'
import UserProfile from './Components/UserProfile'
import Posts from './Components/Posts'
import Contacts from './Components/Contacts'

import "./index.css";

const App = () => {
  return <>
  <NavBar />
  <UserProfile />
  <Posts />
  <Contacts />
  </>
}

export default App;
