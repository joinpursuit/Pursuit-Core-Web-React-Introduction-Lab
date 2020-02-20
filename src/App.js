import React from "react";
// import logo from './logo.svg';
import "./App.css";
import NavBar from "./components/NavBar";
import Contacts from "./components/Contacts/Contacts";
import UserProfile from "./components/UserProfile";
import Post from "./components/Posts/Post/Post"

function App() {
  return (
    <section className="app">
        <>
      <NavBar />
        </>
        <section className="container">
        <section id="leftContainer">
            <UserProfile />
            <Post />

        </section>

        </section>
        <Contacts />
    </section>
  );
}

export default App;
