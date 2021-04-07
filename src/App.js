import React from 'react'
import NavBar from './Components/NavBar'
import UserProfile from './Components/UserProfile'
import Posts from './Components/Posts'
import Contacts from './Components/Contacts'

const main = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
}

const left = {
  padding: '20px',
  width: '60%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around'
}

const rigth = {
  margin: '50px 20px 50px 20px',
  width: '40%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  border: '2px solid black'
}

// App is a React function component
const App = () => {
  // Every function component should return a single JSX tag
  return (
    <>
      <NavBar />
      <section style={main}>
        <section style={left}>
          <UserProfile />
          <Posts />
        </section>
        <section style={rigth}>
          <h3 style={{ alignText: 'center' }}>Contacts</h3>
          <Contacts />
        </section>
      </section>
    </>
  )
}

export default App
