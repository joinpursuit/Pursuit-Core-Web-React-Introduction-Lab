import React from "react";
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";

import "./index.css";

function App() {
  return (
    <div className="profilePage">
      <div className="profilePosts">
        <UserProfile />
        {/* <Posts /> */}
      </div>
      <Contacts />
    </div>
  );
}

export default App;
