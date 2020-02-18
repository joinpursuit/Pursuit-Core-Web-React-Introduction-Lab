import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar.js'
import UserProfile from './Components/UserProfile.js'
import Posts from './Components/Post.js'
import Contacts from './Components/Contacts.js'


function App() {
  return (
    <div className="App">
      {NavBar()}
    {UserProfile()}
    {Posts()}
    {Contacts()}
    </div>
  );
}

export default App;
