import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <div className='NavBar'>
        <button>What is Pursuit?</button>
        <button>Create an account</button>
        <button>Sign in</button>
      </div>
    )  
  }
}

// const NavBar = () => {
//   return (
//     <div className='NavBar'>
//       <button>What is Pursuit?</button>
//       <button>Create an account</button>
//       <button>Sign in</button>
//     </div>
//   )        
// }

export default NavBar;