import React from 'react'

import { BaseSection } from '../base-section/base-section'

export const IndexPageContent = () => {
  return (
    <BaseSection
      sectionTitle={`Be a hero. Be a <span className='pColor'>GDG</span>.`}
      classNames="hero"
    >
      {/* <section class="section hero" id="Home"> */}
      {/* <h1 class="heading">
        Be a hero. Be a <strong class="pColor">GDG</strong>.
      </h1> */}
      <p class="description">
        Welcome to GDG Casablanca. Google Developer Groups of Casablanca City is
        for developers who are interested in Google's developer technology,
        everything from Android, App Engine, and Google Chrome platforms, to
        product APIs like the Maps API, YouTube API and Google Calendar API.
      </p>
      <p class="hashtags">
        #GDGCasablanca &nbsp; #WTMCasablanca &nbsp; #GDG &nbsp; #WTM
      </p>
      <div class="action-btns">
        <a
          class="btn"
          href="https://www.meetup.com/GDGCasablanca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check our Meetup page
        </a>
      </div>

      {/* </section> */}
    </BaseSection>
  )
}
