import React from 'react'

import Link from '../link/link'
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
    <footer className="section footer">
      <div className="container">
        <div style={{ width: '100%' }}>
          <p className="small-text">Developer community</p>
          <h1>GDG Casablanca.</h1>
          <div className="links-block-wrapper">
            <div className="links-block">
              <h5>Socials</h5>
              <ul className="links-list">
                {socialLinks.map(({ link, label, external }, index) => (
                  <li key={index}>
                    <Link to={link} external={external}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="links-block">
              <h5>About</h5>
              <ul className="links-list">
                {aboutLinks.map(({ link, label, external }, index) => (
                  <li key={index}>
                    <Link to={link} external={external}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="links-block">
              <h5>Partners</h5>
              <ul className="links-list">
                {partnersLinks.map(({ link, label, external }, index) => (
                  <li key={index}>
                    <Link to={link} external={external}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
