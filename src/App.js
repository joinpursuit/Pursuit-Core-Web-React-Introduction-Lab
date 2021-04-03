import React from "react";
import NavBar from './Components/NavBar';
import UserProfile from './Components/UserProfile';
import Posts from './Components/Posts.js';
import Contacts from './Components/Contacts';
import "./index.css";



export default function App() {
  return (
    <div className='App-Div'>
    <NavBar />
    <UserProfile />
    <Posts/>
    <Contacts/>
    </div>
  );
}
