import React from 'react';
import '../master/navBar.css';

class NavBar extends React.Component {

    render(){
        return (
            <section className = "navBar">
                <section id="buttons">
                    <button>What is Pursuit ?</button>
                    <button> Create an account</button>
                    <button>Sign In </button>
                </section>

                <section id="container">
                    <section id="leftContainer">

                    </section>
                </section>

            </section>
        );
    }

}

export default NavBar;