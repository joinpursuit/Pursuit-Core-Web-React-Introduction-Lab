import React from "react";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
import "./index.css";

let compArr = [
  <div className="header">
    <NavBar />
  </div>,
  <main className="main">
    <div className="submain1">
      <UserProfile />
      <Posts />
    </div>
    <div className="submain2">
      <Contacts />
    </div>
  </main>,
];

const App = () => {
  return compArr;
};

export default App;
