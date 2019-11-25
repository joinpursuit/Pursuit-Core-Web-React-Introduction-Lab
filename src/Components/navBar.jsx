import React from 'react';
import './navBar.css';

class NavBar extends React.Component{
    render() {
        return (
            <nav>
                <button>What is Pursuit</button>
                <button>Create an account</button>
                <button>Sign up</button>
            </nav>
        )
    }
}

export default NavBar;
