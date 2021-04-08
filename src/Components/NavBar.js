import React from "react";
import "./styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <button className="NavButtons">
        <button>What is Pursuit?</button>
        <button>Create an account</button>
        <button>Sign in</button>
      </button>
    </div>
  );
};

export default NavBar;
