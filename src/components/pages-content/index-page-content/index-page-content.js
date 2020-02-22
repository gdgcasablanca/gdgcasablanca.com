import React from 'react'

import { HeroSection } from './sections/hero-section/hero-section'
import { GDGEvents } from './sections/gdg-events/gdg-events'
import { ContactSection } from './sections/contact-section/contact-section'

const IndexPageContent = () => {
  return (
    <>
      <HeroSection />
      <GDGEvents />
      <ContactSection />
    </>
  )
}

export default IndexPageContent
