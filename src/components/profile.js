import { Link } from "gatsby"
import React from "react"

const Profile = () => (
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
        to="/dashboard/api_token"
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
    </nav>
  </div>
)


export default Profile
