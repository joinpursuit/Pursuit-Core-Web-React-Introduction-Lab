import react from 'react'
import './Contacts.css'
import UserCard from './ContactUserCard'

function Contacts() {
    return (
    <div className= "contacts">
        <h2 className="heading">Contacts</h2>
        <UserCard />
        <UserCard />
        <UserCard />
    </div>
    )
}
export default Contacts
