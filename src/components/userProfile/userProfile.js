import React from "react"
import img from "../../img/img.png"



const UserProfile = ({name,title})=>{
    return(
        <div className={"userprofile"}>
        <img src= {img} height= "100px"/>
        {"Jon"}
        <br></br>
        
        title:{"Instructional Assistant"}

        </div>
    )

}

export default UserProfile