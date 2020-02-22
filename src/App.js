import React from 'react';
import './App.css';
import UserProfile from './Components/UserProfile';
import NavigationBar from './Components/NavigationBar'
import PostFeed from './Components/PostFeed'
import ContactList from './Components/ContactList'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <UserProfile />
      <ContactList />
      <PostFeed />
    </div>
  );
}

export default App;