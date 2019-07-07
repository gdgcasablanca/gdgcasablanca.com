import React from 'react'

import { BaseSection } from '../base-section/base-section'
import OrganizerList from '../organizer-list/organizer-list'
import teamMembersData from './team-members-data'

const TeamPageContent = () => {
  return (
    <>
      <BaseSection
        SectionTitle={() => <>Team.</>}
        classNames="contact"
        id="Contact"
      >
        <OrganizerList teamMembersData={teamMembersData} />
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
