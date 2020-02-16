import React from 'react';
import Navbar from "./components/Navbar";
import Userprofile from './components/Userprofile';
import Post from "./components/Posts"
import Contact from "./components/Contacts"



const App = () => {
  return (
    <div className = "App">
      <Navbar/>
      <div className="user-profile">
        {/* <Userprofile image = {avatar}/> */}
        <h2>
          <Userprofile name={"Rafid"}/>
        </h2>
        <h3>
          <Userprofile title={"Boss Developer"}/>
        </h3>
        <p>
          <Userprofile body={"I'm just here to code"}/>
        </p>
      </div>
            
      <div className = "post">
        <p>
          <h1>Posts</h1>
          <Post title = {"Today's Post"}/>
          <Post comment = {"What a Beautiful day to code"}/>
        </p>
      </div>
      <div className="contacts">
      <h1>Contacts</h1>
        <h2>
        <Contact name ={"Karen"}/>
        </h2>
        <h3>
        <Contact title= {"SQL Developer"}/>
        </h3>
        <p>
        <Contact body ={"Data Storyteller"}/>
        </p>
      </div> 
    </div>
  );
}

export default App;
