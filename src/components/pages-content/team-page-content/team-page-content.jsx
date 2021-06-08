import * as React from 'react'
import useSWR from 'swr'

import Link from '../../link/link'
import BaseSection from '../../base-section/base-section'
import OrganizerList from '../../organizer-list/organizer-list'

import Text from '../../ui/text/text'

const TeamPageContent = () => {
  const { data, error } = useSWR(
    'https://gdgcasablanca-admin.vercel.app/api/members',
  )

  if (error)
    return (
      <BaseSection SectionTitle='Team.'>
        <div>failed to load</div>
      </BaseSection>
    )
  if (!data)
    return (
      <BaseSection SectionTitle='Team.'>
        <div>loading...</div>
      </BaseSection>
    )

  const teamMembersData = data.map((member) => ({
    name: `${member.firstname} ${member.lastname}`,
    imgLink: member.photo,
    job: member.occupation,
    link: member.url ?? '#!',
    id: member.id,
  }))

  return (
    <BaseSection SectionTitle='Team.'>
      <OrganizerList teamMembersData={teamMembersData} />

      <Text>
        Contact us via email: &nbsp;
        <Link to='mailto:contact@gdgcasablanca.com' external>
          contact@gdgcasablanca.com
        </Link>
      </Text>
    </BaseSection>
  )
}

export default TeamPageContent
