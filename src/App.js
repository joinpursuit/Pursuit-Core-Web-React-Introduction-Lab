import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Users from './components/UserProfile/UserProfile'
import Posts from './components/Posts/Posts'
// import logo from './logo.svg';
// import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar />
      </header>
      <body>
        <div>
          <Users />
        </div>
        <div>
        <h3>Posts</h3>
          <Posts posts = {[{title: "Title", description: "Loren Ipsem" },
          {title: "Title", description: "Loren Ipsem" },
          {title: "Title", description: "Loren Ipsem" }]
          }
          />
        </div>
      </body>
    </div>
  );
}

export default App;
