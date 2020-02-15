import React from 'react';
import Navbar from "./components/navbar";
import Userprofile from './components/userprofile';
// import posts from "./components/posts/posts"
// import userprofile from  "./components/userprofile/userprofile"
// import contacts from "./components/contacts/contacts"

const App = () => {
  return (
    <div className = "App">
      <Navbar/>
      <div className="user-profile">
        <h1>
          <Userprofile name={"Rafid"}/>
        </h1>
        <h2>
          <Userprofile title={"Boss Developer"}/>
        </h2>
        <p>
          <Userprofile body={"I'm just here to code"}/>
        </p>


      </div>
    </div>
  );
}

export default App;
