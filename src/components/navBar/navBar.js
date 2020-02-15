import React from 'react';
import Link from "./link/link";

const NavBar = ({links}) =>{
    links= links.map(link =>{
        return <Link urlName={link.urlName} urlLink ={link.urlLink} key={link.urlName}/>
    })

    return(
        <div>
        {links}
        </div>
    )

}
export default NavBar;