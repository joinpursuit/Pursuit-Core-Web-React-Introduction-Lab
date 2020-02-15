import React from 'react';
import './navBar.css';

const Nav = (props) => {
    return (
        <div className={"buttons"}>
            <button>
                {props.name}
            </button>
        </div>
    )
}

export default Nav;