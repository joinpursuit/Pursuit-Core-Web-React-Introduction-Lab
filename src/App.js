import React from "react";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
import "./index.css";
import "./Style/contact.css";

function App() {
  return (
    <>
      <NavBar />
      <UserProfile />
      <Posts />
      <Contacts />
    </>
  );
}
export default App;
