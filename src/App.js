import React from 'react';
import './App.css';

import NavBar from './Components/NavBar';
import UserProfile from './Components/UserProfile';
import ContactList from './Components/ContactList';
import Feed from './Components/Feed';

function App() {
  return (
    <div className="App">
      <NavBar />
      <UserProfile />
      <Feed />
      <ContactList />
    </div>
  );
}

export default App;
