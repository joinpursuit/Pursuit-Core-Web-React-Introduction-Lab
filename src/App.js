import React from 'react';
import './App.css';
import NavBar from './Components/navBar';
import Profiles from './Components/userProfile';
import Contacts from './Components/contacts';
import Posts from './Components/posts';



function App() {
  return (
    <div className="App">
    
  <div class="item1"><NavBar /></div>
  <div class="item2"><Profiles /></div>
  <div class="item3"><Contacts /></div>  
  <div class="item4"><Posts /></div>
      
      {/* <h2>Posts</h2>
      
      <Posts />
      <Posts />
      <Posts /> */}
      </div>
  );
}

export default App;
