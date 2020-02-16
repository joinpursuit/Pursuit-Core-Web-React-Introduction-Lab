import React from 'react'
import'./ContactList.css'
const avatar = require ('./Avatars/Avatar.png')

 class ContactList extends React.Component {
   constructor() {
     super ();
     this.info ={
       name: 'Mark',
       title: 'Creator',
       description:'Hello word',
   }
 }

 render(){
   return(
     <div id='contact'>
       <div class="user">
       <div class='image'>
      <img src={avatar} alt="avatar"></img>
       </div>
       <div class='userInfo'>
       <h3>{this.info.name}</h3>
       <h4>{this.info.title}</h4>
       <p>{this.info.description}</p>
       </div>
       </div>
     </div>
   )
 }
 }

export default ContactList;