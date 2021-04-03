import React from "react";
import NavBar from './Components/NavBar';
import {Contacts} from './Components/Contacts';
import UserProfile from './Components/UserProfile';
import Posts from './Components/Posts';
import "./index.css";

export default function App() {
  return (
    <div className="App">
    <NavBar /> 
    <UserProfile />
    <Posts /> 
    <Contacts />
    </div>
  )
}
