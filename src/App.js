import React from "react";
import NavBar from './Components/NavBar';
import Profile from './Components/UserProfile';
import Posts from './Components/Posts';
import Contacts from './Components/Contacts';

import "./index.css";


const App = () => {
  return (
   <div>
     <NavBar />
     <Profile />
     <Contacts />
     <Posts />
   </div>
  )
  }
export default App;
