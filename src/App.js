import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar"
import UserProfile from "./Components/UserProfile.js"
import Posts from "./Components/Posts"
import ContactUserCard from "./Components/ContactUserCard"
import Contacts from "./Components/Contacts";

const App = () => {
  return (
    <div>
      <NavBar />
      <UserProfile />
      <Posts />
      <Contacts />
    </div>
  )

}





// const helloMsg = "This is your first day on Earth."
// let name = "Jenna"

// const App = () => {
//   return <p>Hello, {name}! {helloMsg}</p>;
// }

export default App;



