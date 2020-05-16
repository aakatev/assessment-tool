import React from 'react'
import { navigate } from 'gatsby'
import { useIdentityContext } from 'react-netlify-identity'


const RouteLogin = () => {
  const identity = useIdentityContext()

  if(identity && identity.isLoggedIn) {
    navigate('/dashboard/token')
  }

  return(
    <div>
      <h1>Please Log In</h1>
      <button>Log In</button>
    </div>
  )
}
export default RouteLogin