import React from "react"
import '../styling/UserProfile.css'

const UserProfile = ()=>{
    return (
        <section className="UserProfile">
            <div className="Avatar">
                <img src="https://pics.me.me/thumb_my-new-pfp-for-my-google-account-71732136.png"></img>

            </div>
            <div className="User-Info">
                <h1>Jordan Walke</h1>
                <h3>React Creator</h3>
                <p>Lorem Ipsem</p>
            </div>
   
        </section>
    )
}



export default UserProfile