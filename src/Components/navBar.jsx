import React from 'react'

class NavBar extends React.Component {
    render() {
        return (
            <div class='navBar'>
                <ul class='nav'>
                    <li><a href="#">Buckets</a></li>
                    <li><a href="#">Things</a></li>
                    <li><a href="#">Chop</a></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;