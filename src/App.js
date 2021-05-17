import React from "react";
import Contacts from "./Components/Contacts";
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";

import "./index.css";

const App = () => {
  return (
    <>
      <NavBar />
      <UserProfile />
      <Contacts />
      <Posts />
    </>
  );
};

export default App;