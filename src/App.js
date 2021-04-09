import React from "react";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";
import Posts from "./Components/Posts";

import "./index.css";

function App() {
  return (
    <>
     <NavBar/>
    <section className="mainSection">
    <div className="leftSection">
     <UserProfile/>
     <Posts/>
    </div>
    <div className="rightSection">
     <Contacts/>

    </div>
    </section>
    </>
  );
  }

  export default App;