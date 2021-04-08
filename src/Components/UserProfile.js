import React from "react"
// import img from "../../public/profile.png"

let profile = {
    name: "Jordan Walke",
    job: "React Creator",
    lorem: "Lorem Ipsem"
}


const UserProfile = () => {
    return (
        <section className="userProfile">
            {/* <img arc={img} alt="Profile Pic"></img> */}
            <p>{profile.name}</p>
            <p>{profile.job}</p>
            <p>{profile.lorem}</p>
        </section>
    )
}

export default UserProfile;