import React from 'react'
import { navigate } from 'gatsby'
import { useIdentityContext } from 'react-netlify-identity'


const RouteLogin = ({ toggleModal }) => {
  const identity = useIdentityContext()

  if(identity && identity.isLoggedIn) {
    navigate('/dashboard/token')
  }

  return(
    <div>
      <h1>Please Log In</h1>
      <button onClick={() => toggleModal(true)}>Log In</button>
    </div>
  )
}
export default RouteLogin