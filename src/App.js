import React from 'react';
import Contact from './Components/Contact'
import UserProfile from './Components/UserProfile';
import NavBar from './Components/NavBar'
import Feed from './Components/Feed'

import './App.css';
// import Posts from './Components/Posts';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Contact/>
     <UserProfile/>
     <Feed/>
    </div>
  );
}

export default App;
