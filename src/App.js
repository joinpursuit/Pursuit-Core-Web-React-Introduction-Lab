import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Users from './components/UserProfile/UserProfile';
import Posts from './components/Posts/Posts';
import Contact from './components/Contact/Contact'
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
          <h4>Contacts</h4>
          <Users contact ={[{name: "Name", title: "Title", description: "description"},
          {name: "Name1", title: "Title1", description: "description1"},{name: "Name2", title: "Title2", description: "description2"}
          ]}/>

        </div>

    </div>
  );
}

export default App;
