import React from "react";
import NavBar from "./Components/NavBar.js";
import UserProfile from "./Components/UserProfile.js";
import Posts from "./Components/Posts.js";
import Contacts from "./Components/Contacts.js";
import "./index.css";
import "./styles/app.css"

// function App() {
//   return (
//     <div className="grid">
//       <NavBar />
//       <UserProfile />
//       <Posts />
//       <Contacts />
//     </div>
//   );
// }


class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="grid">
      <NavBar />
      <UserProfile />
      <Posts />
      <Contacts />
    </div>
  )
  }
}
export default App;
