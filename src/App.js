import React from 'react'
import NavBar from './Components/NavBar'
import UserProfile from './Components/UserProfile'
import Posts from './Components/Posts'
import Contacts from './Components/Contacts'

const App = () => {
  return (
    <div id= "page">
      <NavBar/>
      <UserProfile/>
      <Posts/>
      <Contacts/>
    </div>
  )
}

export default App;
