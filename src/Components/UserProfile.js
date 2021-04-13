import React from 'react';


let user = {
    name: "Jordan Walke",
    bio: "React Creator" ,
    description: "Lorem Ipsem" ,
}

const Profile = () => {
    return (
        <div >
        <img src = "https://cdn1.iconfinder.com/data/icons/avatar-70/512/avatar_character_people_face_profile_boy_man_young_male_Shirt_teen-512.png" width ="150px"/>
        <div> 
        <p>{user.name}</p>  
        <p>{user.bio}</p>
        <p>{user.description}</p>
        </div>  
        </div>
    )
}

export default Profile 

