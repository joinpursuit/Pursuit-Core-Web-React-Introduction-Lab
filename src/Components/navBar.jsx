import React from 'react';
import './navBar.css';

class NavBar extends React.Component{
    render() {
        return (
            <div className = 'navbar'>
                <button>What is Pursuit</button>
                <button>Create an account</button>
                <button>Sign up</button>

            </div>
        )
    }
}

export default NavBar;
