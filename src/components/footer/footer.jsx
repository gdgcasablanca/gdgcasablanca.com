import React from 'react'

import FooterNav from '../footer-nav/footer-nav'
import BaseSection from '../base-section/base-section'
import styles from './footer.module.css'

const socialLinks = [
  {
    link: 'https://www.meetup.com/GDGCasablanca/',
    label: 'Meetup',
    external: true,
  },
  {
    link: 'https://www.linkedin.com/company/gdgcasablanca/',
    label: 'LinkedIn',
    external: true,
  },
  {
    link: 'https://twitter.com/gdgcasablanca',
    label: 'Twitter',
    external: true,
  },
  {
    link: 'https://www.facebook.com/GDGCasa/',
    label: 'Facebook',
    external: true,
  },
]

const aboutLinks = [
  {
    link: 'https://gdgcasablanca.com/',
    label: 'GDG Casablanca',
    external: true,
  },
  {
    link: 'https://wtm.gdgcasablanca.com/',
    label: 'WTM Casablanca',
    external: true,
  },
]

const partnersLinks = [
  {
    link: 'mailto:contactgdgcasablanca@gmail.com',
    label: 'contactgdgcasablanca@gmail.com',
    external: true,
  },
]

export const Footer = () => {
  return (
    <BaseSection
      bg
      as='footer'
      classes={styles.footer}
      aria-label='Site Footer content'
      smallText='Developer community'
      SectionTitle='GDG Casablanca.'
    >
      <div className={styles.linksBlockWrapper}>
        <FooterNav links={socialLinks} title='Socials' />
        <FooterNav links={aboutLinks} title='About' />
        <FooterNav links={partnersLinks} title='Partners' />
      </div>
    </BaseSection>
  )
}
