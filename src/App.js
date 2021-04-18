import React from "react";

import "./index.css";
import "./App.css";
import Navbar from "./Components/NavBar";
import Profile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";

const App = () => {
  return (
    <div className= "page">
      <Navbar/>
      <Profile/>
      <Contacts/>
      <Posts/>
    </div>
  );
}

export default App;
