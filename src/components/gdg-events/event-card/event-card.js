import React from 'react'
import { CalendarToday, AccessTime, PinDrop } from '@material-ui/icons'

import './event-card.css'

export const EventCard = ({
  title,
  date,
  eventLink,
  timeFrom,
  timeTo,
  location,
}) => (
  <div class="event-card">
    <h3 class="title">{title}</h3>
    <ul class="details">
      <li>
        <CalendarToday className="material-icons" />
        {date}
      </li>
      <li>
        <AccessTime className="material-icons" />
        {`${timeFrom} to ${timeTo}`}
      </li>
      <li>
        <PinDrop className="material-icons" />
        {location}
      </li>
    </ul>
    <a
      class="more-link"
      href={eventLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      Check Event page
    </a>
  </div>
)
