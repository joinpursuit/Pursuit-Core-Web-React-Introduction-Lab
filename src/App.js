import React from 'react';
import './App.css';
import NavBar from './Component/NavBar';
import UseProfile from './Component/UserProfile';
import PostBody from './Component/PostBody';
import Contacts from './Component/Contacts'

function App() {
  return (
    <div className="App">
      <NavBar/>

      <div className="Body">
      <UseProfile/>
      <Contacts/>
      <PostBody/>
    </div>

    </div>
  );
}

export default App;
