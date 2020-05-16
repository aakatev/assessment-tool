import { Link } from "gatsby"
import React from "react"
import { useIdentityContext } from 'react-netlify-identity'


const Profile = ({ toggleModal }) => {
  const identity = useIdentityContext()
  const name = (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.full_name) || 'Guest'
  const isLoggedIn = identity && identity.isLoggedIn 
  console.log(name, isLoggedIn)
  return (
    <div
      style={{
        background: `#20232a`,
      }}
    >
      <nav
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      > 
        <Link
          to="/dashboard/token"
          style={{
            color: `gray`,
            textDecoration: `none`,
            margin: '1rem'
          }}
          activeClassName="active"
        >
          API Token
        </Link>
        <Link
          to="/dashboard/settings"
          style={{
            color: `gray`,
            textDecoration: `none`,
            margin: '1rem'
          }}
          activeClassName="active"
          >
            Settings
        </Link>
        {isLoggedIn &&
          <button
            onClick={() => toggleModal(true)}
            style={{
              color: `gray`,
              textDecoration: `none`,
              margin: '1rem',
              cursor: 'pointer'
              
            }}
            className="btn-logout"
          >
            Logout
          </button>
        }
      </nav>
    </div>
  )
}


export default Profile
