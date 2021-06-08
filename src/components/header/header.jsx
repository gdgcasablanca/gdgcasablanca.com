import React from 'react'
import PropTypes from 'prop-types'

import Link from '../link/link'
import GDGCasaLogo from '../../images/logo-gdg.svg'
import WTMCasaLogo from '../../images/logo-wtm.svg'
import styles from './header.module.css'

export const Header = ({ siteTitle }) => (
  <header className={styles.header} aria-label='Site Header content'>
    <div className='container'>
      <Link to='/' classes={styles.logoGdg}>
        <img src={GDGCasaLogo} alt={siteTitle} />
      </Link>

      <nav className={styles.navLinks}>
        <Link to='/'>Home</Link>
        <Link to='/#Events'>Events</Link>
        <Link to='/#Contact'>Contact</Link>
        <Link to='/team'>Team</Link>
        {/* <Link to="#!">About</Link>  */}
      </nav>

      <Link
        to='https://wtm.gdgcasablanca.com'
        classes={styles.logoWtm}
        external
      >
        <img
          src={WTMCasaLogo}
          alt='WTM Casablanca. Connect. Create. Celebrate.'
        />
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `GDG & WTM Casablanca`,
}
