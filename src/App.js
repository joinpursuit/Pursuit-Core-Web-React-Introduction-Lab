import React from "react";

import "./index.css";
import NavBar from "./Components/NavBar";
import Posts from "./Components/Post";
import UserProfile from "./Components/UserProfile";
import Contact from "./Components/Contacts";


const App = () => {
  return (
    <div>
      <NavBar/>
      <Posts/>
      <UserProfile/>
      <Contact/>

    </div>
  );
}

export default App;
