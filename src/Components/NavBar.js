import "./NavBar.css";

// import React from 'react'
// export default function NavBar(){
        
//     return (
        // <div className="topbar">
        //     <div>
        //         <button>What is Pursuit?</button>
        //     </div>
        //     <div>
        //         <button>Create an account</button>
        //     </div>
        //     <div id="signUpDiv">
        //         <button>Sign in</button>
        //     </div>
        // </div>
//     );
// }


import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div className="topbar">
                <div>
                    <button>What is Pursuit?</button>
                </div>
                <div>
                    <button>Create an account</button>
                </div>
                <div id="signInDiv">
                    <button>Sign in</button>
                </div>
        </div>
        )
    }
}

