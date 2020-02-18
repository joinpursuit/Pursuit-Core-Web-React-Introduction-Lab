import React from 'react';
import './Navbar.css'

const navBar = (props) => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div></div>
            <div className="toolbar_logo"><a href="/">Pursuit</a></div>
            <div className="spacing-between"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href='/'>What is Pursuit</a></li>
                    <li><a href='/'>Create an account</a></li>
                    <li><a href='/'>Sign In</a></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default navBar;