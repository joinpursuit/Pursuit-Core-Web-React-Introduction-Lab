import React from 'react';
import ContactCard from './contactCard';

 class User extends React.Component{
     render() {
         return (
             <div className = 'user'>
                 <ContactCard/>
             </div>
         )
     }
 }

 export default User;