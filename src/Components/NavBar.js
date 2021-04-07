import React from 'react'

const navStyle = {
  backgroundColor: 'aqua',
  width: '100%',
  height: '70px',
  display: 'flex',
  justifyContent: 'flex-end'
}
const lefty = {
  padding: '10px',
  width: '35%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center'
}

const button = {
  margin: '8px',
  alignSelf: 'space-around'
}

const NavBar = () => {
  return (
    <nav style={navStyle}>
      <div style={lefty}>
        <button style={button}>What is Pursuit?</button>
        <button style={button}>Create an account</button>
        <button style={button}>Sign in</button>
      </div>
    </nav>
  )
}
export default NavBar
