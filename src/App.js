import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
// import from "";

function App() {
  return (
    <div>
      <Navbar/>
      <UserProfile/>
      <Posts/>
    </div>
  );
}
export default App;
