import React from 'react'
import NavBar from './User_profile';
import './NavBar.css'

class NavBar extends React.Component {
  render (){
    return(
      <nav>
        <button>What is Pursuit?</button>
        <button>Create an account</button>
        <button>Sign in</button>
      </nav>
    )
  }
}

export default NavBar;