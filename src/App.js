import React from 'react';
import './App.css';
import UserProfile from './Components/UserProfile';
import NavBar from './Components/NavBar'
import Feed from './Components/Feed'
import Contacts from './Components/Contacts'

function App() {
  return (
    <div className="App">
      <NavBar />
      <UserProfile />
      <Contacts />
      <Feed />
    </div>
  );
}

export default App;
