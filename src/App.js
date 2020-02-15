import React from 'react';
// import NavBar from "./components/navBar/navBar"
import Link from "./components/navBar/link/link"
import './App.css';

function App() {
  return (
      // console.log({url,urlName})  
    <div className="App">
    
      <Link  { urlLink="http://joinpursuit.github.io/jsworkshop/index.html", urlName="pursuit"}/>
    </div>
    
  );
}

export default App;
