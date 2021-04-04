import React from  'react'
import "../styles/navBar.css"

const navInfo = {
    pursuit: "What is Pursuit?",
    account: "Create an account",
    sign: "Sign in"
}

const NavBar = () => {
    return (
        <div className="nav-bar">
            <button>{navInfo.pursuit}</button>
            <button>{navInfo.account}</button>
            <button>{navInfo.sign}</button>
        </div>
    )
}

export default NavBar
