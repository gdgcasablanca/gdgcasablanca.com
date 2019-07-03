import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import TeamPageContent from '../components/team-page-content/team-page-content'

const Team = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={['GDG Casablanca', 'GDG Casablanca Team', 'GDG']} />
      <TeamPageContent />
    </Layout>
  )
}

export default Team
