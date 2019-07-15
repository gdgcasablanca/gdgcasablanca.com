import React from 'react'

import FooterNav from '../footer-nav/footer-nav'
import './footer.css'

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
    <footer className="section footer" aria-label="Site Footer content">
      <div className="container">
        <div style={{ width: '100%' }}>
          <p className="small-text">Developer community</p>
          <h1>GDG Casablanca.</h1>
          <div className="links-block-wrapper">
            <FooterNav links={socialLinks} title='Socials' />
            <FooterNav links={aboutLinks} title='About' />
            <FooterNav links={partnersLinks} title='Partners' />
          </div>
        </div>
      </div>
    </footer>
  )
}
