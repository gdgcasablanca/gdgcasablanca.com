import React from 'react'

import Link from '../../link/link'
import styles from './footer-nav.module.css'

const FooterNav = ({ links, title }) => {
  return (
    <nav className={styles.linksBlock} aria-label={`${title} link list`}>
      <h5 className={styles.navTitle}>{title}</h5>
      <ul className={styles.linksList}>
        {links.map(({ link, label, internal }, index) => (
          <li key={index}>
            <Link to={link} external={!internal}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default FooterNav
