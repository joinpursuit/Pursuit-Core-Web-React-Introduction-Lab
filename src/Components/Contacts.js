import React from 'react'
import ContactUserCard from './ContactUserCard'

function Contacts() {
    return (
        <div>
            <ul>
                <li><ContactUserCard /></li>
                <li><ContactUserCard /></li>
                <li><ContactUserCard /></li>
                <li><ContactUserCard /></li>
            </ul>
        </div>
    )
}

export default Contacts;