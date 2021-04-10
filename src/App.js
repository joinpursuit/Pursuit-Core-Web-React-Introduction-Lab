import React from "react";
import Contacts from "./Components/Contacts";
import NavBar from './Components/NavBar';
import Posts from './Components/Posts';
import UserProfile from './Components/UserProfile'
import "./index.css";

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Posts></Posts>
      <UserProfile></UserProfile>
      <Contacts></Contacts>
    </div>
)}

export default App;
