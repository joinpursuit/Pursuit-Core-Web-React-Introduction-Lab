import React from "react";
import Navbar from "./Components/NavBar";
import Profile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
import "./index.css";
import "./App.css"

const App = () => {
  return (
    <div id = "page">
      <Navbar/>
      <Profile/>
      <Contacts/>
      <Posts/>
   
    </div>
  );
}

export default App;
