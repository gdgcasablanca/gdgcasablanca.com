import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import CocPageContent from '../components/pages-content/coc-page-content/coc-page-content'

const Team = () => {
  return (
    <Layout>
      <SEO
        title='Code of conduct'
        keywords={[
          'GDG Casablanca Code of conduct',
          'GDG Code of conduct',
          'GDG Casablanca',
          'GDG',
        ]}
      />

      <CocPageContent />
    </Layout>
  )
}

export default Team
