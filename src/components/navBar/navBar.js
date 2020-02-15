import React from 'react';
import Link from "./link/link"

const NavBar = (Link) =>{
    Link= Link.map(el =>{
        return < Link url= {el.url} key={el.url}/>
    })

    return(
        <nav className = {"navLink"}>
            {/* <Link/> */}
        </nav>
    )

}
export default NavBar;