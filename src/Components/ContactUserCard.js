import React from "react";

let user = {
    name: "Jordan Walke",
    bio: "React Creator" ,
    description: "Lorem Ipsem" ,
}

function UserCard() {
   return(
   <div>
        <img src ="https://cdn1.iconfinder.com/data/icons/avatar-70/512/avatar_character_people_face_profile_boy_man_young_male_Shirt_teen-512.png" height ="100px"></img>
            <p className="name">{user.name}</p>
            <p className="bio">{user.bio}</p>
            <p className="description">{user.description}</p>
    </div>
   )
}

export default UserCard