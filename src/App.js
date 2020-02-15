import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navBar/navBar.js"
import Contacts from "./components/contacts/contacts.js"
import Posts from "./components/posts/posts.js"
import UserProfile from "./components/userProfile/userProfile.js"

const app = () =>{
  let arr = [{title:"Cats",description:"flufy cat"},{title:"Dogs",description:"Big dog"},{title:"Fish",description:"Gold Fish"},{title:"Birds",description:"Red Bird"}]
  let arr2 =[{name:"Joe",title:"IA"},{name:"Jhenya",title:"IA"},{name:"Corey",title:"Instructor"},{name:"Caroline",title:"Program Manager"}]
  return (
    <div className="App">
      <Navbar/>
      <br></br>
      <UserProfile />
      
      <Posts post={arr}/>
      
      <Contacts contacts={arr2}/>
    </div>

  );
}

export default app;
