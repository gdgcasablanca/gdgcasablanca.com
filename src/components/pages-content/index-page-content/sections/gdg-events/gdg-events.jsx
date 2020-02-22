import React from 'react'
import { Cached as CachedIcon } from '@material-ui/icons'

import BaseSection from '../../../../base-section/base-section'
import EventCard from '../../../../ui/event-card/event-card'
import Link from '../../../../link/link'
import styles from './gdg-events.module.css'
import Text from '../../../../ui/text/text'

const MEETUP_ENDPOINT =
  'https://api.meetup.com/gdgcasablanca/events?&photo-host=public&page=20'
const PROXY_URL = 'https://oh-cors-anywhere.herokuapp.com/'
const MEETUP_DATA_ENDPOINT = PROXY_URL + MEETUP_ENDPOINT

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const AllEvents = React.memo(() => {
  const [upcomingEvents, setUpcomingEvents] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    fetch(MEETUP_DATA_ENDPOINT)
      .then(response => response.json())
      .then(data => {
        setUpcomingEvents(data)
        setLoading(false)
      })
      .catch(err => console.error(err))
  }, [])

  if (loading) {
    return <CachedIcon className={styles.animateSpin} />
  }

  return (
    upcomingEvents &&
    upcomingEvents.map((eventData, index) => {
      const {
        local_date: localDate,
        name: title,
        link: eventLink,
        local_time: timeFrom,
        venue,
      } = eventData

      const eventDate = new Date(localDate)
      const date = `${
        months[eventDate.getMonth()]
      } ${eventDate.getDate()}, ${eventDate.getFullYear()}`

      const location = venue ? `${venue.name}, ${venue.city}` : 'Soon ...'

      const event = {
        title,
        date,
        eventLink,
        timeFrom,
        location,
      }

      return <EventCard key={String(index)} {...event} />
    })
  )
})

const GDGEvents = React.memo(() => {
  return (
    <BaseSection
      bg
      id='Events'
      SectionTitle={() => (
        <>
          Planned{' '}
          <Text color='primary' as='span' size='inherit'>
            Events
          </Text>
          .
        </>
      )}
    >
      <div className={styles.eventCards}>
        <AllEvents />
      </div>
      <Link
        classes={styles.seeAllLink}
        to='https://www.meetup.com/GDGCasablanca/events/'
        external
      >
        See All GDG Casablanca Events
      </Link>
    </BaseSection>
  )
})

export default GDGEvents
