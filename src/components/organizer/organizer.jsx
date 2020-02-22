import React from 'react'

import Link from '../link/link'
import styles from './organizer.module.css'

const Organizer = ({ name, imgLink, job, link }) => {
  return (
    <div className={styles.organizer}>
      <div className={styles.innerOrganizer}>
        <Link to={link} external classes={styles.link}>
          <img src={imgLink} alt={name} className={styles.organizerImage} />
          <p className={styles.organizerName}>{name}</p>
          <p className={styles.organizerFunction}>{job}</p>
        </Link>
      </div>
    </div>
  )
}

export default Organizer
