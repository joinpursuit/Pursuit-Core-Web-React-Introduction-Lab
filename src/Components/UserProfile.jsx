import React from 'react'
import './UserProfile.css' 

class UserProfile extends React.Component{
    render(){
        return (
        <div id= "userProfile">
            <div id="profileImgDiv">
            <img id="profileImg" rel="profilePicture" src="https://www.booksie.com/files/profiles/22/mr-anonymous_230x230.png">
            </img>
            </div>
            <div id="userInfo">
            <h1>Jordan Walke</h1>
            <h2>React Creator</h2>
            <p>Lorem Ipsem</p>
            </div>
        </div>
        )

    }
}





export default UserProfile