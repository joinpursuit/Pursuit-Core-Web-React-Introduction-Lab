import React from "react";
import Navbar from "./components/Navbar";
import Userprofile from "./components/Userprofile";
import Post from "./components/Posts";
import Contact from "./components/Contacts";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div id="container">
        <div id="left">
          <div className="user-profile">
            <Userprofile
              name={"Rafid"}
              title={"Boss Developer"}
              body={"I'm just here to code"}
            />
          </div>

          <div className="user-post">
            <p>
              <h1>Posts</h1>
              <Post title={"NBA All-Stars 2020"} comment={"WE love you Kobe"} />
              <Post
                title={"Kobe and Gigi"}
                comment={"2 & 24 forever in our hearts"}
              />
              <Post
                title={"React"}
                comment={"Was created by Facebook? Amazing"}
              />
            </p>
          </div>
        </div>
        <div id="right">
          <div className="contacts">
            <h1>Contacts</h1>

            <Contact
              name={"Karen"}
              title={"SQL Developer"}
              body={"Data Storyteller"}
            />
            <Contact
              name={"Paul"}
              title={"Web Developer"}
              body={"Started by code journey since the late 90s"}
            />
            <Contact
              name={"Faye"}
              title={"MOS Instructor"}
              body={"I've been teaching since 2017"}
            />
            <Contact
              name={"Rosaylynd"}
              title={"Career Coach"}
              body={"Aspire to greatness"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
