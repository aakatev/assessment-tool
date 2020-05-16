import React, { useEffect, useState } from "react"
import { Link, navigate } from "gatsby"
import { Router } from '@reach/router'
import { IdentityModal } from 'react-netlify-identity-widget'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from '../components/profile'

import RouteSettings from '../components/routeSettings'
import RouteToken from '../components/routeToken'
import RouteLogin from '../components/routeLogin'

import 'react-netlify-identity-widget/styles.css'
import "@reach/tabs/styles.css"

const DashboardPage = ({ location }) => {
  const [isVisible, setVisibility] = useState(false)
  useEffect(() => {
    if(location.pathname.match(/^\/dashboard\/?$/)) {
      navigate('/dashboard/login', { replace: true })
    }
  }, [location.pathname])
  
  const toggleModal = (visible) => setVisibility(visible)

  return (
    <Layout pageInfo={{ pageName: "dashboard" }}>
      <SEO title="Dashboard" />
      <Profile toggleModal={toggleModal}/>
      <h1>Dashboard</h1>
      <p>Welcome user!</p>
      <Router>
        <RouteSettings path="/dashboard/settings" />
        <RouteToken path="/dashboard/token" />
        <RouteLogin path="/dashboard/login" toggleModal={toggleModal} />
      </Router>
      <IdentityModal 
        showDialog={isVisible}
        onCloseDialog={() => toggleModal(false)}
      />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default DashboardPage