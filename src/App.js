import React from 'react';
import './App.css';
import ContactList from './Components/ContactList';
import './Components/ContactList.css'

import UserProfile from './Components/UserProfile'

import PostsList from './Components/Post'

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <ContactList/>
      <UserProfile/>
      <PostsList/>
    </div>
  );
}

export default App;
