import React from 'react'

import BaseSection from '../../../../base-section/base-section'
import EventCard from '../../../../ui/event-card/event-card'
import Link from '../../../../link/link'
import styles from './gdg-events.module.css'
import Text from '../../../../ui/text/text'
import LoadingCard from '../../../../ui/loading-card/loading-card'
import NoResultsCard from '../../../../ui/no-results-card/no-results-card'

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

function formatDate(date) {
  const eventDate = new Date(date)

  const year = eventDate.getFullYear()
  const month = months[eventDate.getMonth()]
  const day = eventDate.getDate()

  return `${month} ${day}, ${year}`
}

const AllEvents = React.memo(() => {
  const [upcomingEvents, setUpcomingEvents] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    let timeoutId = null
    fetch(MEETUP_DATA_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        timeoutId = setTimeout(() => {
          setUpcomingEvents(data)
          setLoading(false)
        }, 500)
      })
      .catch((err) => console.error(err))

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  if (loading) {
    return <LoadingCard />
  }

  if (upcomingEvents.length <= 0) {
    return <NoResultsCard />
  }

  return upcomingEvents.map((eventData, index) => {
    const {
      local_date: localDate,
      name: title,
      link: eventLink,
      local_time: timeFrom,
      venue,
    } = eventData

    const date = formatDate(localDate)

    const entries = []
    if (venue) {
      if (venue.name) {
        entries.push(venue.name)
      }
      if (venue.city) {
        entries.push(venue.city)
      }
    }

    const location = venue ? entries.join(', ') : 'Soon ...'

    const event = {
      title,
      date,
      eventLink,
      timeFrom,
      location,
    }

    return <EventCard key={String(index)} {...event} />
  })
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
        See all events on meetup
      </Link>
    </BaseSection>
  )
})

export default GDGEvents
