import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import UserProfile from './Components/UserProfile'
import ContactList from './Components/contactList'
import PostList from './Components/postList'

function App() {
  return (
    <div>
      <div className="navBar">
      <NavBar />
      </div>

      <div className="container">

      <div className="left">
      <div className="userProfile">
        <UserProfile />
      </div>

      <div className="postList">
        <PostList />
      </div>
      </div>

      <div className="right">
      <div className="contactList">
        <ContactList />
      </div>
      </div>

      </div>
    </div>
  );
}

export default App;
