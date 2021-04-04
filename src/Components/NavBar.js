import React from "react";
import "../styling/NavBar.css";

class NavBar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <nav className="NavBar">
        <button>What is Pursuit?</button>
        <button>Create an account</button>
        <button>Sign in</button>
      </nav>
    );
  }
}

export default NavBar;
