import React from "react";
import Contacts from './Components/Contacts.js'
import Posts from "./Components/Posts.js";
import UserProfile from "./Components/UserProfile.js";
import NavBar from './Components/NavBar.js'
import "./index.css";

export default function App() {
  const naviBar = <NavBar />;
  const h1 = <h1>Hello</h1>
  const p = <p>World</p>;
  // const h1p = h1 + p + naviBar;
  // debugger
  return (
    <div className='App-Div'>
    {console.log(naviBar)}
    {console.log(h1)}
    {/* {console.log(h1p)} */}
    <NavBar />
    <UserProfile />
    <Posts />
    <Contacts />
  </div>);
}
