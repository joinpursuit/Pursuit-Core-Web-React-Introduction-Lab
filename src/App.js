import React from 'react';
import './App.css';
import UserProfile from './components/UserProfile.jsx';
import NavBar from './components/NavBar.jsx'
import Posts from './components/Posts.jsx'
import Contacts from './components/Contacts.jsx'

function App() {
  return (
    <div className="App">
      <div id = 'navbar'>
      <NavBar />
      </div>
      
      <div id = 'userProfile'>
      <UserProfile />
      </div>

      <div id ='posts'>
      <Posts />
      </div>

      <div id = 'contacts'>
      <Contacts />
      </div>
    </div>
  );
}

export default App;
