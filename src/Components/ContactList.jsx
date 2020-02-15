import React from 'react'

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
     <div>
  
       <h3> {this.info.name}</h3>
       <h4>{this.info.title}</h4>
       <p>{this.info.description}</p>
     </div>
   )
 }
 }

export default ContactList;