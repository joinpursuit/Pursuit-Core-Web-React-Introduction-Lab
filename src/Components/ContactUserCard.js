import React from "react";

let user = {
    name: "Jordan Walke",
    bio: "React Creator" ,
    description: "Lorem Ipsem" ,
}

function UserCard() {
   return(
   <div>
        <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl_xE0ap6FN0msZ7Y_EBolTqKK9ZYFijBXIg&usqp=CAU" height ="100px"></img>
        {/* <div> */}
            <p className="name">{user.name}</p>
            <p className="bio">{user.bio}</p>
            <p className="description">{user.description}</p>
        {/* </div> */}
    </div>
   )
}

export default UserCard
