import React from 'react'

import Link from '../../../../link/link'
import BaseSection from '../../../../base-section/base-section'
import Button from '../../../../ui/button/button'
import styles from './hero-section.module.css'

const TwHashtagLink = ({ label }) => (
  <Link to={`https://twitter.com/hashtag/${label}`} external>
    #{label}
  </Link>
)

const twLinks = ['GDGCasablanca', 'WTMCasablanca', 'GDG', 'WTM']

export const HeroSection = () => (
  <BaseSection
    SectionTitle={() => (
      <>
        Be a hero. Be a <span className='pColor'>GDG</span>.
      </>
    )}
    classes={styles.hero}
    id='Home'
  >
    <p className={styles.description}>
      Welcome to GDG Casablanca. Google Developer Groups of Casablanca City is
      for developers who are interested in Google's developer technology,
      everything from Android, App Engine, and Google Chrome platforms, to
      product APIs like the Maps API, YouTube API and Google Calendar API.
    </p>
    <p className={styles.hashtags}>
      {twLinks.map((link, index) => (
        <React.Fragment key={index}>
          <TwHashtagLink label={link} /> &emsp;
        </React.Fragment>
      ))}
    </p>
    <Button
      classes={styles.cta}
      as={Link}
      to='https://www.meetup.com/GDGCasablanca/'
      external
    >
      Check our Meetup page
    </Button>
  </BaseSection>
)
