import React from "react"
import img from "../../img/img.png"


const divStyle = {
    color: 'blue',
    border: "solid",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'black'
}

const Contacts = ({contacts})=>{
    contacts = contacts.map(contact=>{
         return(<div className={"contacts"} style ={divStyle}>
        <img src= {img} height= "100px"/>
        <br></br>
         {contact.name}
         <br></br>

         Title: {contact.title}
         
         
 
         </div>)
     })
   
 
     return(
         <div className="container" >

         <ul>
         <h2>Contacts</h2>
             {contacts}
         </ul>
         
         </div>
     )
 
 }
export default Contacts