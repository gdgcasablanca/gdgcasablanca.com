import React from 'react'
import { CalendarToday, AccessTime, PinDrop } from '@material-ui/icons'

import { BaseSection } from '../base-section/base-section'
import './gdg-events.css'

export const GDGEvents = () => {
  return (
    <BaseSection
      sectionTitle="Planned Events"
      classNames="section-bg"
      id="Events"
    >
      <div class="event-cards">
        <div class="event-card">
          <h3 class="title">Next ’19 Extended Casablanca</h3>
          <ul class="details">
            <li>
              <CalendarToday className="material-icons" /> June 22, 2019
            </li>
            <li>
              <AccessTime className="material-icons" /> 13pm to 18h00pm
            </li>
            <li>
              <PinDrop className="material-icons" /> Casablanca
            </li>
          </ul>
          <a
            class="more-link"
            href="https://www.meetup.com/GDGCasablanca/events/261056581/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check Event page
          </a>
        </div>
        {/* This will be filled with event cards */}
      </div>
      <a
        href="https://www.meetup.com/GDGCasablanca/"
        rel="noopener noreferrer"
        target="_blank"
        class="see-all-link"
      >
        See All GDG Casablanca Events
      </a>
    </BaseSection>
  )
}
