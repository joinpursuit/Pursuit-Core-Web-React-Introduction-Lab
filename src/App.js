import React from 'react';
import NavBar from "./components/navBar/navBar"
import PostList from './components/postList/postList'
import './App.css';

function App() {
  return (
      // console.log({url,urlName})  
    <div className="App">
      <NavBar links = {[{urlName:"What is Pursuit",urlLink:"2"},{urlName:"Create an account",urlLink:"2"},{urlName:"Sign in",urlLink:"2"}]}/>
      
      <PostList post = {[{title:"1",content:"1"},{title:"2",content:"2"},{title:"3",content:"4"}]}/>
      {/* <PostList /> */}
    </div>

  );
}

export default App;
