import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Link from '../components/link/link'
import Text from '../components/ui/text/text'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <div className='container'>
      <h1 style={{ marginTop: '5rem' }}>
        <strong>NOT FOUND</strong>
      </h1>
      <Text>The page you wanted was not found.</Text>
      <Link to='/'>Navigate to the home page</Link>
    </div>
  </Layout>
)

export default NotFoundPage
