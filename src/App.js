import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar"
import UserProfile from "./Components/UserProfile"
import Posts from "./Components/Posts"
import Contacts from "./Components/Contacts"


const App = () => {
  return <p>Hello, world!</p>;
  return(
    <div> 
    <NavBar />
    <UserProfile/>
    <Posts/>
    <Contacts />
    </div>
  )
}

export default App;
