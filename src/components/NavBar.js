import React from "react";
import "../master/NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <div id="buttons">
          <button>What is Pursuit?</button>
          <button>Create an account</button>
          <button>Sign in</button>
        </div>
      </div>
    );
  }
}

export default NavBar;
