import React from 'react'
import { Cached } from '@material-ui/icons'

import { BaseSection } from '../../../../base-section/base-section'
import { EventCard } from './event-card/event-card'
import Link from '../../../../link/link'
import './gdg-events.css'

const MEETUP_ENDPOINT =
  'https://api.meetup.com/gdgcasablanca/events?&photo-host=public&page=20'
const PROXY_URL = 'https://oh-cors-anywhere.herokuapp.com/'
const MEETUP_DATA_ENDPOINT = PROXY_URL + MEETUP_ENDPOINT

export class GDGEvents extends React.Component {
  constructor() {
    super()

    this.state = {
      upcomingEvents: [],
      loading: true,
    }
  }

  componentDidMount() {
    fetch(MEETUP_DATA_ENDPOINT)
      .then(response => response.json())
      .then(data => {
        this.setState(
          {
            upcomingEvents: data,
          },
          () =>
            this.setState({
              loading: false,
            })
        )
      })
      .catch(err => console.log(err))
  }

  render() {
    const { loading, upcomingEvents } = this.state
    return (
      <BaseSection
        SectionTitle={() => (
          <>
            Planned <span className="pColor">Events</span>.
          </>
        )}
        classNames="section-bg"
        id="Events"
      >
        <div className="event-cards">
          {loading ? (
            <Cached className="animate-spin" />
          ) : (
            upcomingEvents.map((eventData, index) => {
              const months = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
              ]
              const eventDate = new Date(eventData.local_date)
              const date = `${
                months[eventDate.getMonth()]
              } ${eventDate.getDate()}, ${eventDate.getFullYear()}`

              const event = {
                title: eventData.name || '',
                date: date || '',
                eventLink: eventData.link || '',
                timeFrom: eventData.local_time || '',
                timeTo: '',
                location:
                  (eventData.venue &&
                    `${eventData.venue.name}, ${eventData.venue.city}`) ||
                  'Soon ...',
              }

              return <EventCard key={String(index)} {...event} />
            })
          )}
        </div>
        <Link
          to="https://www.meetup.com/GDGCasablanca/events/"
          external
          className="see-all-link"
        >
          See All GDG Casablanca Events
        </Link>
      </BaseSection>
    )
  }
}
