import React from 'react';

const navBarButton = {
    button1: 'What is Pursuit?',
    button2: 'Create an account',
    button3: 'Sign in'
}

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <button type='button'>{navBarButton.button1}</button>
            <button type='button'>{navBarButton.button2}</button>
            <button type='button'>{navBarButton.button3}</button>
        </div>
    )
}

export default NavBar;