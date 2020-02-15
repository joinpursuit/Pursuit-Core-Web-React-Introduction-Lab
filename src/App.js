import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Users from './components/UserProfile/UserProfile';
import Posts from './components/Posts/Posts';
import Contacts from './components/Contacts/Contacts'
// import logo from './logo.svg';
// import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar />
      </header>
      
        <div>
          <Users />
        </div>
        <div>
        <h3>Posts</h3>
          <Posts posts = {[{title: "Title", description: "Loren Ipsem" },
          {title: "Title 1", description: "Loren Ipsem" },
          {title: "Title 2", description: "Loren Ipsem" }]
          }
          />
          <Contacts />

        </div>

    </div>
  );
}

export default App;
