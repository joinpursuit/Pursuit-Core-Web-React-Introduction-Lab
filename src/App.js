import React from "react";
import "./styling/App.css"
import Contacts from "./Components/Contacts";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";
import NavBar from "./Components/NavBar";

function App (){
return (
  <div className="App">
      <NavBar/>
      {/* <section id="main-section"> */}
      <UserProfile/>
      <Posts/>
      <Contacts/>
      {/* </section> */}
    </div>
  );
}

export default App;