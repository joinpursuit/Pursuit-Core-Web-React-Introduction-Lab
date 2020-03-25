import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Users from './components/UserProfile/UserProfile';
import Posts from './components/Posts/Posts';
import Master from './components/MasterUser/MasterUser'

// import logo from './logo.svg';
// import './App.css';

const App = () => {
  return (
    <div className="App">
          <NavBar />
          <Master />
          <Posts />
          <Users />
    </div>
  );
}

export default App;
