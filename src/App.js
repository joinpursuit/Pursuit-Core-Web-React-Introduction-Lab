import React from 'react';
import './App.css';
import UserProfile from './Components/UserProfile';
import NavBar from './Components/NavBar';
import Contacts from './Components/Contacts';
import Posts from './Components/Posts';

function App() {
  return (
    <div>
      <NavBar />
      <UserProfile />
      <Posts />
      <Contacts />
    </div>
  );
}

export default App;
