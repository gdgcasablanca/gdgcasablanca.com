import React from 'react'

import { BaseSection } from '../base-section/base-section'
import { EventCard } from './event-card/event-card'
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
        sectionTitle="Planned Events."
        classNames="section-bg"
        id="Events"
      >
        <div class="event-cards">
          {this.state.allEvent.map(event => (
            <EventCard {...event} />
          ))}
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
