import React from "react";
import "../styles/NavBar.css";

// function NavBar() {
//   return (
//     <div className="navBar">
//       <button>What is Pursuit?</button>
//       <button>Create an account</button>
//       <button>Sign in</button>
//     </div>
//   );
// }


class NavBar extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="navBar">
      <button>What is Pursuit?</button>
      <button>Create an account</button>
      <button>Sign in</button>
    </div>
  )
  }
}
export default NavBar;
