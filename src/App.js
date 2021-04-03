import React from "react";
import NavBar from "./Components/NavBar"
import UserProfile from "./Components/UserProfile"
import Posts from "./Components/Posts"
import Contacts from "./Components/Contacts"
// import ContactUserCard from "./Components/ContactUserCard"
import "./index.css";

export default function App() {
  return (
    <>
    <NavBar />
    <UserProfile />
    <Posts />
    <Contacts />
    </>
  );
}

