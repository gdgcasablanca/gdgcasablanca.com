import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import TeamPageContent from '../components/pages-content/team-page-content/team-page-content'

const Team = () => {
  return (
    <Layout>
      <SEO
        title='Team'
        keywords={['GDG Casablanca', 'GDG Casablanca Team', 'GDG']}
      />
      <TeamPageContent />
    </Layout>
  )
}

export default Team
