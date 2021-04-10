import React from 'react'
import "./NavBar.css";

export default function NavBar(){
        
    return (
        <div className="topbar">
            <div>
                <button>What is Pursuit?</button>
            </div>
            <div>
                <button>Create an account</button>
            </div>
            <div id="signUpDiv">
                <button>Sign in</button>
            </div>
        </div>
    );
}
