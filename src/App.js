import React from 'react';
import NavBar from "./components/navBar/navBar"
// import Link from "./components/navBar/link/link"
import './App.css';

function App() {
  return (
      // console.log({url,urlName})  
    <div className="App">
      <NavBar links = {[{urlName:"1",urlLink:"2"}]}/>
    </div>

  );
}

export default App;
