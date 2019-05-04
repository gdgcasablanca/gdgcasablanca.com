import React from 'react'
import { CalendarToday, AccessTime, PinDrop } from '@material-ui/icons'

import { BaseSection } from '../base-section/base-section'
import './gdg-events.css'

const DB_ENDPOINT = 'https://gdgcasablanca-website.firebaseio.com/events.json'

export class GDGEvents extends React.Component {
  constructor() {
    super()

    this.state = {
      allEvent: [],
    }
  }

  componentDidMount() {
    fetch(DB_ENDPOINT)
      .then(response => response.json())
      .then(events => {
        this.setState({ allEvent: events })
      })
  }

  render() {
    console.log(this.state.allEvent)
    return (
      <BaseSection
        sectionTitle="Planned Events"
        classNames="section-bg"
        id="Events"
      >
        <div class="event-cards">
          {this.state.allEvent.map(
            ({ title, date, eventLink, timeFrom, timeTo, location }) => (
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
          )}
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
}
