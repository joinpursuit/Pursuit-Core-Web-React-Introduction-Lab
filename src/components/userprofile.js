import React from "react";
// import "../components/css/userprofile" 


const Userprofile = ({ image, name, title, body})=>{
    return(
        <div className="profile"> 
        { image }
        { name }
        { title }
        { body }
        </div>
    )
}
export default Userprofile;