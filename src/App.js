import React from "react";
import NavBar from './Components/NavBar';
import Posts from './Components/Posts';
import UserProfile from './Components/UserProfile'
import Contacts from './Components/Contacts'
import "./index.css";

const App = () => {
  return (
    <div>
      <NavBar/>
      <Posts/>
      <UserProfile/> 
      <Contacts/>
    </div>
  )
}

export default App;
