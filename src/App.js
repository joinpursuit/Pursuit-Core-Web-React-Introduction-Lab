import React from "react";

import "./index.css";

import UserProfile from "./Components/UserProfile";

import Contacts from "./Components/Contacts";

import NavBar from "./Components/NavBar";

import Posts from "./Components/Posts";

export default function App() {
  //return <p>Hello, world!</p>;
  return (
    <>
      <UserProfile />
      <Contacts />
      <NavBar />
      <Posts />
    </>
  );
}
