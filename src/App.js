
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";
import Posts from "./Components/Posts"


import "./index.css";

// import React from "react";
// const App = () => {
//   return (
//     <>
//       <NavBar />
//       <div className="grid-container">
//         <UserProfile />
//         <Contacts />
//         <Posts />
//       </div>
//     </>
//   );
// }

// export default App;

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <>
        <div className="grid-container">
          <NavBar />
          <UserProfile />
          <Contacts />
          <Posts />
        </div>
      </>
    )
  }
}
