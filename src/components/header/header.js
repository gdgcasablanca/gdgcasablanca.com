import React from 'react'
import PropTypes from 'prop-types'
import Link from '../link/link'

import GDGCasaLogo from '../../images/logo-gdg.svg'
import WTMCasaLogo from '../../images/logo-wtm.svg'
import './header.css'

export const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="container">
      <Link to="/" className="logo logo-gdg">
        <img src={GDGCasaLogo} alt={siteTitle} />
      </Link>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/#Events">Events</Link>
        <Link to="/#Contact">Contact</Link>
        <Link to="/team">Team</Link>
        {/* <Link to="#!">About</Link>  */}
      </nav>

      <Link
        to="https://wtm.gdgcasablanca.com"
        className="logo logo-wtm"
        external
      >
        <img
          src={WTMCasaLogo}
          alt="WTM Casablanca. Connect. Create. Celebrate."
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
