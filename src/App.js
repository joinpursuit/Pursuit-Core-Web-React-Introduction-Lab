import React from "react";
// import App from "./App"
import Contacts from "./Components/Contacts"
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";
import "./index.css";

function App() {
return(
  <div>
    <NavBar />
    <UserProfile />
    <Posts />
    <Contacts />
  </div>
)
}

export default App