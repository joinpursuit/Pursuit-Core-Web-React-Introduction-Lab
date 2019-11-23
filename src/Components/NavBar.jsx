import React from 'react';

import './NavBar.css'

class NavBar extends React.Component {
    render() {
        return(
            <div className="nav">
                <button type="button" id="pursuit" className="button">WHAT IS PURSUIT?</button>
                <button type="button" id="new-account" className="button">CREATE AN ACCOUNT</button>
                <button type="button" id="login" className="button">LOGIN</button>
            </div>
        )
    }

}

export default NavBar;