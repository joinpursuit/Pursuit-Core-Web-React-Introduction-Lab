import React from 'react';
import './NavBar.css'

class NavBar extends React.Component{
    render(){
        return (
        <div className='Header'>
            <div className='Links'> 
            <button>What is Pursuit</button>
            <button>Create an Account</button>
            <button>Sign In</button>
            </div>
        </div>
        )
    }
}

export default NavBar