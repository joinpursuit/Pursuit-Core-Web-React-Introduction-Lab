import React from 'react';

class NavBar extends React.Component {
    render() {
        return (
            <div className='NavBar'>
                <a>Sign in</a>
                <a>Create an account</a>
                <a>What is Pursuit?</a>
            </div>
        )        
    }
}

export default NavBar;