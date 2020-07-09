import React from 'react'

import Link from '../link/link'
import FooterNav from '../ui/footer-nav/footer-nav'
import BaseSection from '../base-section/base-section'
import styles from './footer.module.css'
import GDGCasaLogo from '../../images/logo-gdg.svg'

const footerLinks = [
  {
    title: 'About',
    links: [
      {
        label: 'WTM Casablanca',
        link: 'https://wtm.gdgcasablanca.com/',
      },
      {
        label: 'Code of conduct',
        link: '/coc',
        internal: true,
      },
      {
        label: 'Google Developers Group',
        link: 'https://developers.google.com/community/gdg',
      },
      {
        label: 'Women Techmakers',
        link: 'https://www.womentechmakers.com/',
      },
    ],
  },
  {
    title: 'Social',
    links: [
      {
        link: 'https://www.meetup.com/GDGCasablanca/',
        label: 'Meetup',
      },
      {
        link: 'https://www.linkedin.com/company/gdgcasablanca/',
        label: 'LinkedIn',
      },
      {
        link: 'https://twitter.com/gdgcasablanca',
        label: 'Twitter',
      },
      {
        link: 'https://www.facebook.com/GDGCasa/',
        label: 'Facebook',
      },
    ],
  },
  {
    title: 'Partner & Sponsor',
    links: [
      {
        label: 'contact@gdgcasablanca.com',
        link: 'mailto:contact@gdgcasablanca.com',
      },
    ],
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
        {footerLinks.map(({ links, title }) => {
          return <FooterNav links={links} title={title} />
        })}
      </div>

      <hr className={styles.divider} />

      <div className={styles.footerBottom}>
        <img
          src={GDGCasaLogo}
          alt='GDG Casablanca Logo'
          className={styles.footerLogo}
        />
        <p className={styles.copyRight}>
          By <strong>GDG Casablanca</strong> Team. The code is @&nbsp;
          <Link
            href='https://github.com/gdgcasablanca/gdgcasablanca.com'
            target='_blank'
          >
            Github
          </Link>
        </p>
      </div>
    </BaseSection>
  )
}
