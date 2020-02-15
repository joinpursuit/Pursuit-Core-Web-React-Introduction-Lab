import React from 'react';
import NavBar from "./components/navBar/navBar";
import PostList from './components/postList/postList';
import ContactList from "./components/ContactList/contactList";
import Profile from "./components/userProfile.js"
import './App.css';

function App() {
  return (
      // console.log({url,urlName})  
    <div className="App">
      <NavBar links = {[{urlName:"What is Pursuit",urlLink:"2"},{urlName:"Create an account",urlLink:"2"},{urlName:"Sign in",urlLink:"2"}]}/>
      <Profile name={"Jordan Walke"} position={"react Creator"} statement={"lorem ipsom"}/>
      <PostList post = {[{post_id:"1", title:"Title 1",content:"content is here"},{post_id:"2", title:"Title 2",content:"content2 is here"},{post_id:"3", title:"Title 3",content:"content3 is here"},]}/>
      <ContactList contacts={[{name:"jim",position:"test",statement:"test1"},{name:"jim2",position:"test2",statement:"test2"},{name:"jim3",position:"test3",statement:"test3"}]}/>
    </div>

  );
}

export default App;
