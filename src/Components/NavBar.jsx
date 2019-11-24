import React from 'react'; 

class NavBar extends React.Component {
    constructor() {
        super();
        this.navbar = {

        }
    }
    render() {
        return (
            <div>
                <button>What is Pursuit?</button>
                <button>Create an account</button>
                <button>Sign In</button>
            </div>
        )
    }
}

export default NavBar;