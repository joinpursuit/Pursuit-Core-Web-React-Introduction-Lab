import React from 'react'
import Contact from './Contacts'
import './Contact_list.css'
 class Contact_list extends React.Component {
   constructor() {
     super ();
     this.info ={
       name: 'Marck',
       image: Avatar,
       title: 'Creator',
       description:'Hello word',
   }
 }

 render(){
   return(
     <div>
       <img src={this.info.image} alt="picture of a person"></img>
       <h3> {this.info.name}</h3>
       <h4>{this.info.title}</h4>
       <p>{this.info.description}</p>
     </div>
   )
 }
 }

export default Contact_list;