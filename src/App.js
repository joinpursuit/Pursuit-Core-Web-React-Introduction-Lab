import React from "react";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";

import "./index.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <section>
        <div className="profilePosts">
          <UserProfile />
          <Posts />
        </div>
        <div>
          <Contacts />
        </div>
      </section>
    </div>
  );
}
