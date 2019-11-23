import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import './Components/NavBar.css'
import UserProfile from './Components/UserProfile'
import './Components/UserProfile.css'
import Posts from './Components/Posts'
import './Components/Posts.css'
import Contacts from './Components/Contacts'
import './Components/Contacts.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <NavBar />
      </header>
        <div className= 'App-userProfile'>
          <UserProfile />
        </div>
        <div className= 'App-posts'>
          <Posts />
        </div>
        <div className= 'App-contacts'>
          <Contacts />
        </div>
    </div>
  );
}

export default App;
