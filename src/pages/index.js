import React from 'react'

import Layout from '../components/layout/layout'
import IndexPageContent from '../components/index-page-content/index-page-content'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`GDG Casablanca`, `GDG`]} />
    <IndexPageContent />
  </Layout>
)

export default IndexPage
