import React from 'react';
import './App.css';
import Nav from './Components/Navbar/navBar';
import Posts from './Components/Posts/Posts'
import Contacts from './Components/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <Nav name = {"What is Pursuit?"}/>
        <Nav name = {"Create User"}/>
        <Nav name = {"Sign In"}/>
      </div>

      <div className="Posts">
        <Posts title= {"Test title"} summary= {"Writing a new posts"}/>
        <Posts title= {"Test title"} summary= {"Writing a new posts"}/>
        <Posts title= {"Test title"} summary= {"Writing a new posts"}/>
      </div>

      <div className="Contacts">
        <Contacts name = {"Jovanni"} title = {"Concierge"} summary = {"Que lo que?"}/>
        <Contacts name = {"Ohidur"} title = {"Soundcloud Rapper"} summary = {"You know who it is!"}/>
        <Contacts name = {"Corey"} title = {"JS teacher"} summary = {"Hypebeast, we lit"}/>
        <Contacts name = {"Celine"} title = {"Stocks trader"} summary = {"Hello, how are you?"}/>
      </div>
      
    </div>
  );
}

export default App;
