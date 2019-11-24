import React from 'react';
import './App.css';
import NavBar from './Components/NavBar.jsx';
import UserProfile from './Components/UserProfile.jsx';
import Posts from './Components/Posts.jsx';
import Contacts from './Components/Contacts.jsx';

function App() {
  return (
    <div className='AppDiv'>
      <NavBar />
      <div className='content'>  
        <UserProfile />
        <Contacts />
        <Posts />
      </div>
    </div>
  );
}

export default App;
