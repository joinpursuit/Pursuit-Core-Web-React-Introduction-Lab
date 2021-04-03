import React from "react";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts"
import Contacts from "./Components/Contacts"
 import './App.css'
//  import "./index.css";

export default function App() {
  return (
    <main className="Main-App">
      <NavBar />
      <UserProfile />
      <Posts/>
      <Contacts/>
    </main>
  );
}
