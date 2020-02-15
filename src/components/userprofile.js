import React from "react";
import "./../../src/css/userprofile.css" 

const Userprofile = ({ name, title, body})=>{
    return(
        <div classname="profile"> 
        { name }
        {title}
        { body }
        </div>
    )
}
export default Userprofile