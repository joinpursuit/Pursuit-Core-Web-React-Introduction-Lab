import React from "react"



const Contacts = ({contacts})=>{
    contacts = contacts.map(contact=>{
         return(<div className={"contacts"}>
         {contact.name}
         <br></br>

         Title: {contact.title}
         
         
 
         </div>)
     })
   
 
     return(
         <div className="container">

         <ul>
         <h2>Contacts</h2>
             {contacts}
         </ul>
         
         </div>
     )
 
 }
export default Contacts