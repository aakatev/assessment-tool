import React, { useEffect } from "react"
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

const DashboardPage = ({ location }) => {
  useEffect(() => {
    if(location.pathname.match(/^\/dashboard\/?$/)) {
      navigate('/dashboard/login', { replace: true })
    }
  }, [location.pathname])
  return (
    <Layout pageInfo={{ pageName: "dashboard" }}>
      <SEO title="Dashboard" />
      <Profile />
      <h1>Dashboard</h1>
      <p>Welcome user!</p>
      <Router>
        <RouteSettings path="/dashboard/settings" />
        <RouteToken path="/dashboard/api_token" />
        <RouteLogin path="/dashboard/login" />
      </Router>
      <IdentityModal 
        showDialog={true}
      />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default DashboardPage