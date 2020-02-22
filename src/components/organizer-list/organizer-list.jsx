import React from 'react'

import Organizer from '../organizer/organizer'
import styles from './organizer-list.module.css'

const OrganizerList = ({ teamMembersData }) => {
  return (
    <div className={styles.organizers}>
      {teamMembersData.map(({ name, imgLink, job, link }) => (
        <Organizer name={name} imgLink={imgLink} job={job} link={link} />
      ))}
    </div>
  )
}

export default OrganizerList
