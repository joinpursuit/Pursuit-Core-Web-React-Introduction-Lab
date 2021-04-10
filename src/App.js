  
import React from "react";
import NavBar from "./Components/NavBar"
import Contacts from "./Components/Contacts"
import Posts from "./Components/Posts"
import UserProfile from "./Components/UserProfile"
import "./index.css";


export default function App() {
  return ([
    <>
    <NavBar/> 
    <UserProfile/>
    <Posts/>
    <Contacts/>
    </>
  ])
}


