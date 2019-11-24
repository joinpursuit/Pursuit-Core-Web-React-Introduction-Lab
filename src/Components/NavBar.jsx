import React from 'react';
import './NavBar.css'


class NavBar extends React.Component{
    render(){
        return(
            <div id = "allTheButtons">
               <button className="button" id="whatIsPursuitButton" >
          <a rel="WhatIsPursuit">What is Pursuit?</a></button>

        <button className="button" id="createAccountButton">
          <a rel="CreateAccount"> Create an Account</a>
        </button>

        <button className="button" id="signInButton">
          <a rel="signIn"> sign in
        </a>
        </button>
            </div>
            
        )

    }

}

export default NavBar