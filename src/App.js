import React from 'react';
import './App.css';
import NavBar from './Components/navBar';
import Profiles from './Components/userProfile';
import Contacts from './Components/contacts';
import Posts from './Components/posts';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Profiles />
      <Contacts />
      <Posts />
      </div>
  );
}

export default App;
