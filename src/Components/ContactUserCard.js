import React from 'react'

const card = {
  border: '1px solid black',
  margin: ' 0 0 0 0',
  padding: '10px',
  width: '80%',
  height: '15%',
  display: 'flex',
  flexDisplay: 'row'
}

const logo = {
  width: '37%',
  height: '100%'
}

const tall = {
  margin: '0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'space-between'
}
const dato = {
  margin: '0',
  padding: '10px 0px 0px 0px',
  display: 'flex',
  justifySelf: 'center',
  alignSelf: 'center'
}

// Function component
const ContactUserCard = () => {
  return (
    <div style={card}>
      <img src={require('./user.png')} style={logo} />
      <div style={tall}>
        <h3 style={dato}>Jordan Walke</h3>
        <h4 style={dato}>React Creator</h4>
        <p style={dato}>Lorem Ipsem</p>
      </div>
    </div>
  )
}

export default ContactUserCard
