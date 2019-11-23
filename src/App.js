import React from "react";
import Navbar from "./components/navbar.jsx";
import UserProfile from "./components/userProfile.jsx";
import Contacts from "./components/contacts.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <UserProfile />
      <Contacts />
    </div>
  );
}

export default App;
