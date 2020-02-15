import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import UserProfile from './components/UserProfile';
import Posts from './components/Posts';
import Contacts from './components/Contacts';
// import ContactUserCard from './components/ContactUserCard';

function App() {
  return (
    <div className="App">
      <Contacts contactList= {[{name: "Sam", title: "Student", caption: "Hey", image: "img1"}, {name: "Maria", title: "Student", caption: "Bonjour", image: "img2"}]} />
      <Posts posts= {[{title: "Cool", caption: "Hey"}]} />
      <UserProfile {[{name: "Maria", title: "Student", caption: "Bonjour"}]} />
      <NavBar />
    </div>
  );
}

export default App;
