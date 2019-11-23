import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserProfile from './components/UserProfile.jsx';
import NavBar from './components/NavBar.jsx'

function App() {
  return (
    <div className="App">
      <NavBar />
      <UserProfile />
    </div>
  );
}

export default App;
