import React from 'react'
import './NavBar.css'

class NavBar extends React.Component {
  handleSubmit = (e) =>{
    e.preventDefault()
  }
  render (){
    return(
      
      <nav>
        <div id="navDiv">
        <button><a href="https://www.pursuit.org/">What is Pursuit</a></button>
        <form action=""
        onSubmit={this.handleSubmit}>
        <button>Create an account</button>
        <button>Sign in</button>
        </form>
        </div>
      </nav>
    )
  }
}

export default NavBar;