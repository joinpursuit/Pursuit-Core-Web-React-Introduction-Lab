import React from 'react'
import './NavBar.css'

class NavBar extends React.Component {
  render (){
    return(
      <nav>
        <button>Welcome to Pursuit</button>
        <button>Create an account</button>
        <button>Sign in</button>
      </nav>
    )
  }
}

export default NavBar;