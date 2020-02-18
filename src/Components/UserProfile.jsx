import React from 'react';
import './UserProfile.css'

const avatar = require ('./Avatars/Avatar.png')

 class ContactList2 extends React.Component {
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
     <div id='contact2'>
       <div className="user2">
       <div className='image2'>
      <img src={avatar} alt="avatar"></img>
       </div>
       <div className='userInfo2'>
       <h3>{this.info.name}</h3>
       <h4>{this.info.title}</h4>
       <p>{this.info.description}</p>
       </div>
       </div>
     </div>
   )
 }
 }

export default ContactList2;
