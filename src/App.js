import React from 'react';
import Contact from './Components/Contact'
import UserProfile from './Components/UserProfile';
import NavBar from './Components/NavBar'

import './App.css';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Contact/>
     <UserProfile/>
  
    </div>
  );
}

export default App;
