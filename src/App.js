import React from 'react';
import './App.css';
import Nav from './Components/Navbar/navBar';
import Posts from './Components/Posts/Posts'
import Contacts from './Components/Contacts/Contacts';
import Users from './Components/UserProfile/userProfile.js'

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <Nav name = {"What is Pursuit?"}/>
        <Nav name = {"Create User"}/>
        <Nav name = {"Sign In"}/>
      </div>
      <div className="UserProfile">
        <Users name = {"Jon"} title = {"Clout Chaser"} summary  = {"Always chase the check"}/>
      </div>

      <div className="Posts">
      <h1>Posts</h1>
        <Posts title= {"Yerr"} summary= {"Add me on Snapchat"}/>
        <Posts title= {"JS"} summary= {"I love to code!"}/>
        <Posts title= {"Thoughts"} summary= {"Why do our nose run, but feet smell?"}/>
      </div>

      <div className="Contacts">
      <h1>Contacts</h1>
        <Contacts name = {"Jovanni"} title = {"Concierge"} summary = {"Que lo que?"}/>
        <Contacts name = {"Ohidur"} title = {"Soundcloud Rapper"} summary = {"You know who it is!"}/>
        <Contacts name = {"Corey"} title = {"JS teacher"} summary = {"Hypebeast, we lit"}/>
        <Contacts name = {"Celine"} title = {"Stocks trader"} summary = {"Hello, how are you?"}/>
      </div>
      
    </div>
  );
}

export default App;
