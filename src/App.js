import React from "react";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";

import "./index.css";


// export default function App() {
//   return (
//       <div className="App-Div">
//         <NavBar />
//         <UserProfile />
//         <Posts />
//         <Contacts />
//       </div>
//   );
// }


// Refactoring above code
class App extends React.Component {
  constructor(){
    super()
  }
  render() {
    return (
      <div className="App-Div">
        <NavBar />
        <UserProfile />
        <Posts />
        <Contacts />
      </div>
  );
  }
}



export default App;
