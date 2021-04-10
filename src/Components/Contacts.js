import React from "react";

import ContactUserCard from "./ContactUserCard"

import "./Contacts.css"


const Contacts = () => {
    
    const contactCardsArray = [
        {
            name:"Jhon",
            job:"React Developer",
            description:"Lorem Ipsum"
        },
        {
            name:"Alon",
            job:"React Creator",
            description:"Lorem Ipsum"
        },
        {
            name:"Davis",
            job:"React Builder",
            description:"Lorem Ipsum"
        },
        {
            name:"David",
            job:"React Maker",
            description:"Lorem Ipsum"
        }
    ]

    return (
    <div className="Contacts">

        <h1>Contacts</h1>
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
        
        
    </div>
  )
}


// {contactCardsArray.map((card, i)=>{
//     return <ContactUserCard 
    
//     key={i}
//     name={card.name} 
//     job={card.job} 
//     description={card.description}

//     />    
// })}

export default Contacts;