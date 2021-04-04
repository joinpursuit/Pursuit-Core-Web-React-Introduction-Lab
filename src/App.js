import React from "react";
// import App from "./App"
import Contacts from "./Components/Contacts"
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";
import "./index.css";

function App() {
return(
  <>
    <NavBar />
    <UserProfile />
    <Posts />
    <Contacts />
  </>
)
}

export default App