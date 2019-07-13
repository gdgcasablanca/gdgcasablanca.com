import React from 'react'

import Link from '../link/link'
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
          <Link
            to="mailto:contact@gdgcasablanca.com"
            external
          >
            contact@gdgcasablanca.com
          </Link>
        </p>
      </BaseSection>
    </>
  )
}

export default TeamPageContent
