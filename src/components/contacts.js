import React from 'react'
// import "../../css/posts.css"

const Contact = ({ name, title, body}) => {
      return (
         <div id='contactContainer'>
            <div className ="pic">
            <img className ="profilePic" src= "src/components/Avatar/avatar.png" alt ="profile-pic"></img>
            </div>
            <div className="contacts">
           {name}
           {title}
           {body}
            </div>
         </div>
      )
}
export default Contact;