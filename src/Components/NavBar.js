import React from "react";
import "../styles/navBar.css"

const NavBar =() =>{
    return (
        <div className="navBar">
            <button type="button">What is Pursuit?</button>
            <button type="button">Create an account</button>
            <button type="button">Sign in</button>
        </div>
    )
}

export default NavBar;