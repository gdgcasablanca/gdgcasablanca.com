import React from 'react'

import Link from '../../link/link'
import BaseSection from '../../base-section/base-section'
import OrganizerList from '../../organizer-list/organizer-list'

import teamMembersData from './team-members-data'
import Text from '../../ui/text/text'

const TeamPageContent = () => {
  return (
    <>
      <BaseSection SectionTitle='Team.' classes='contact' id='Contact'>
        <OrganizerList teamMembersData={teamMembersData} />
        <Text>
          Contact us via email: &nbsp;
          <Link to='mailto:contact@gdgcasablanca.com' external>
            contact@gdgcasablanca.com
          </Link>
        </Text>
      </BaseSection>
    </>
  )
}

export default TeamPageContent
