import React from 'react'

const user = {
   name: "Jordan Walke",
   occupation: "React Creator",
   title: "Lorem Ipsem"
}

const UserProfile = () => {

   return (
      <div className="profile">
         {user.name}
         {user.occupation}
         {user.title}
      </div>
   )
}

export default UserProfile