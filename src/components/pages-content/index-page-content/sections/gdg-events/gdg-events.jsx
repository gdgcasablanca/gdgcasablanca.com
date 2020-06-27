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

  return upcomingEvents.length > 0 ? (
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
  ) : (
    <NoResultsCard />
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
        See all events on meetup
      </Link>
    </BaseSection>
  )
})

export default GDGEvents
