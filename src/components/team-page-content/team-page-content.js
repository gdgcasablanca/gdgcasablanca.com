import React from 'react'

import { BaseSection } from '../base-section/base-section'
import teamMembers from './team-members'

const TeamPageContent = () => {
  return (
    <>
      <BaseSection
        SectionTitle={() => <>Team.</>}
        classNames="contact"
        id="Contact"
      >
        <div>{teamMembers.map(member => <h4>{member.name}</h4>)}</div>
        <p className="p">
          Contact us via email: &nbsp;
          <a href="mailto:contact@gdgcasablanca.com">
            contact@gdgcasablanca.com
          </a>
        </p>
      </BaseSection>
    </>
  )
}

export default TeamPageContent
