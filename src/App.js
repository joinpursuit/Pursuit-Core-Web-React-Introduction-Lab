import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import UserProfile from './Components/UserProfile'
import Feed from './Components/Feed';
import ContactList from './Components/ContactList'

function App() {
    return (
      <div className="App">
        <NavBar />
        <UserProfile />
        <Feed />
        <ContactList />
      </div>
    )
}

export default App;
