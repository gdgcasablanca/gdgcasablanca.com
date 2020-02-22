import React from 'react'
import { CalendarToday, AccessTime, PinDrop } from '@material-ui/icons'

import Link from '../../link/link'
import styles from './event-card.module.css'

const EventCard = ({
  title,
  date,
  eventLink,
  timeFrom,
  // timeTo,
  location,
}) => (
  <div className={styles.eventCard}>
    <h3 className={styles.title}>{title}</h3>
    <ul className={styles.details}>
      {date && (
        <li>
          <CalendarToday className={styles.materialIcons} />
          {date}
        </li>
      )}
      {timeFrom && (
        <li>
          <AccessTime className={styles.materialIcons} />
          {`Event starts at ${timeFrom}`}
        </li>
      )}
      {location && (
        <li>
          <PinDrop className={styles.materialIcons} />
          {location}
        </li>
      )}
    </ul>
    <Link to={eventLink} external classes={styles.moreLink}>
      Check Event Page
    </Link>
  </div>
)

export default EventCard
