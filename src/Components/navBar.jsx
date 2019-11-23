import React from 'react'

class NavBar extends React.Component {
    render() {
        return (
            <div class='navBar'>
                <ul class='nav'>
                    <li><a href="#">What is Pursuit?</a></li>
                    <li><a href="#">Create an Account</a></li>
                    <li><a href="#">Sign In</a></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;