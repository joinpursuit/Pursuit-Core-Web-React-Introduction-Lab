import React from "react";
import "../styles/NavBar.css"

const NavBar = () =>{
    return(
        <ul className = "nav">
          <button>What is Pursuit?</button> 
          <button>Create an account</button> 
          <button>Sign in</button> 
        </ul>
    )
}

export default NavBar