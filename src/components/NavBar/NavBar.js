import React from 'react';
import './NavBar.css';


class NavBar extends React.Component{
    render(){
        return(

            <div className='Button'>
                <nav>
                <ul>
                <li><button>What is Pursuit?</button></li>
                <li><button>Create an account</button></li>
                <li><button>Sign In</button></li>
                </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar;