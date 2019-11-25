import React from 'react';
import './NavBar.css'

class NavBar extends React.Component {
    render() {
        return (
            <div className="NavBar">
                <button>What's Pursuit?</button>
                <button>Create Account</button>
                <button>Sign in</button>
            </div>
        );
    }
}

export default NavBar;

