import React from 'react'
import { CalendarToday, AccessTime, PinDrop } from '@material-ui/icons'

import Link from '../../../../../link/link'
import './event-card.css'

export const EventCard = ({
  title,
  date,
  eventLink,
  timeFrom,
  // timeTo,
  location,
}) => (
  <div className="event-card">
    <h3 className="title">{title}</h3>
    <ul className="details">
      <li>
        <CalendarToday className="material-icons" />
        {date}
      </li>
      <li>
        <AccessTime className="material-icons" />
        {`Event starts at ${timeFrom}`}
      </li>
      <li>
        <PinDrop className="material-icons" />
        {location}
      </li>
    </ul>
    <Link to={eventLink} external className="more-link">
      Check Event Page
    </Link>
  </div>
)
