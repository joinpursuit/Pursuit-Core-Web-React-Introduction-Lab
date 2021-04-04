import React from "react";
import Contacts from './Components/Contacts.js'
import Posts from "./Components/Posts.js";
import UserProfile from "./Components/UserProfile.js";
import NavBar from './Components/NavBar.js'
import "./index.css";

export default class App extends React.Component {
  render() {
    return (
      <div className='App-Div'>
        <NavBar />
        <UserProfile />
        <Posts />
        <Contacts />
      </div>
    );
  }
}

// export default function App() {

//   return (
//     <div className='App-Div'>
//       <NavBar />
//       <UserProfile />
//       <Posts />
//       <Contacts />
//     </div>
//   );
// }
