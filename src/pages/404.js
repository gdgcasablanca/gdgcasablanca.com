import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container">
      <h1 style={{ marginTop: '5rem' }}>
        <strong>404</strong>
      </h1>
      <p>The page you requested was not found.</p>
      <p>
        <Link to="/">Navigate to the home page</Link>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
