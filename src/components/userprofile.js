import React from "react";
// import '../../css/userprofile.css'

const Userprofile = ({ name, title, body})=>{
    return(
        <div classname={"users"}> 
          Name:   { name },
          title: {title},
          body: { body }
        </div>
    )
}
export default Userprofile