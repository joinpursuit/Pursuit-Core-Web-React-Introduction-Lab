import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactUserCard from './Components/ContactUserCard.jsx'
import Post from './Components/Post.jsx'
import UserProfile from './Components/UserProfile.jsx'
import NavBar from './Components/NavBar.jsx'
function App() {
  return (
    <div className="App">

      <div id="allTheButtons">
        <NavBar/>
      </div>


      <div id="userProfileDiv">
        <UserProfile />
      </div>


      <div id="contactsDiv">
        <h1 className="title">Contacts</h1>
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
      </div>


      <div id="postsDiv">
        <h1 className="title">Post</h1>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default App;
