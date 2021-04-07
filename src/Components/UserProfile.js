import React from 'react'

const userPro = {
  width: '100%',
  height: '30%',
  border: '2px solid black',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start'
}

const info = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  paddingLeft: '20px',
  paddingTop: '20px'
}
const individual = {
  margin: '0',
  padding: '10px 0px 0px 0px',
  display: 'flex',
  justifySelf: 'center',
  alignSelf: 'center'
}
const image = {
  alignSelf: 'flex-start',
  padding: '10px',
  width: '100px',
  height: '100px'
}

const UserProfile = () => {
  return (
    <div style={userPro}>
      <img style={image} src={require('./user.png')} />
      <div style={info}>
        <h2 style={individual}>Jordan Walke</h2>
        <h4 style={individual}>React Creator</h4>
        <p style={individual}>Lorem Ipsem</p>
      </div>
    </div>
  )
}

export default UserProfile
