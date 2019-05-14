import React from 'react'
import { CalendarToday, AccessTime, PinDrop } from '@material-ui/icons'

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
    <a
      className="more-link"
      href={eventLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      Check Event Page
    </a>
  </div>
)
