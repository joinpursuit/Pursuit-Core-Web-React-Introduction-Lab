import React from "react";
import "./navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <button>What is Pursuit?</button>
        <button>Create An Account</button>
        <button>Sign In</button>
      </div>
    );
  }
}

export default Navbar;
