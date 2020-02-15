import React from "react";


const UserProfile = ({name, postiton, description}) => {
  return (
    <div className={"userProfile"}>
      <img src='https://static.thenounproject.com/png/363633-200.png'></img>
      <br/>
      Name: {name}
      <br/>
      Position: {postiton}
      <br/>
      Description: {description}
    </div>
  )
}

export default UserProfile