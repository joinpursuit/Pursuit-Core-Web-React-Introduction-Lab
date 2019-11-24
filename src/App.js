import React from 'react';
import logo from './logo.svg';
import Navbar from './NavBar';
import UserProfile from './UserProfile';
import PostBoard from './PostBoard';
import './App.css';

function App() {
  return (
    <div className = 'whole-app'>
      <Navbar className = 'navBar' />
      <div className='main-body'>
        <div className='left-side'>
          <div className = 'userProfile'>
           <UserProfile />
          </div>
          <div className = 'postBoard'>
           <PostBoard />
          </div>
        </div>
        <div className='right-side'>
        </div>
      </div>
    </div>
  );
}

export default App;
