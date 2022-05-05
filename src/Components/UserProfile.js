import React from "react";


const profileObj = {
    name : "Jordan Walke",
    occupation: "React Creator",
    notes: "Lorem Ipsem"
}

function userProfile(){
return (
    <div>
        {profileObj.name}
        {profileObj.occupation}
        {profileObj.notes}
    </div>
)
}
export default userProfile;
