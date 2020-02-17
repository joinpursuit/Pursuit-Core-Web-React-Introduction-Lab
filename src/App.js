import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import UserProfile from './components/UserProfile';
import Posts from './components/Posts';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <div className="NavBar">
        <NavBar />
      </div>
        
      <div className="UserProfile">
        <UserProfile />
      </div>

      <div className="Posts">
        <Posts />
      </div>

      <div className="Contacts">
        <Contacts />
      </div>


    </div>
  );
}

export default App;
