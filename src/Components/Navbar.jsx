import React from 'react';

import './Navbar.css';

class Navbar extends React.Component {
    render(){

    return(
        <div className='navbar'> 
        <button>What is Pursuit ? </button>
        <button>Create an account </button>
        <button>Sign in </button>
        </div>
    )
    }
}

export default Navbar;