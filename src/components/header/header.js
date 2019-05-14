import PropTypes from 'prop-types'
import React from 'react'

import GDGCasaLogo from '../../images/logo-gdg.svg'
import WTMCasaLogo from '../../images/logo-wtm.svg'
import './header.css'

export const Header = ({ siteTitle }) => (
  <header className="header">
    <nav className="nav">
      <div className="container">
        <a href="/" className="logo logo-gdg">
          <img src={GDGCasaLogo} alt={siteTitle} />
        </a>

        <div className="nav-links">
          <a href="#Home">Home</a>
          <a href="#Events">Events</a>
          <a href="#Contact">Contact</a>
          {/* <a href="#!">Team</a>
          <a href="#!">About</a>  */}
        </div>

        <a
          href="https://wtm.gdgcasablanca.com"
          className="logo logo-wtm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={WTMCasaLogo}
            alt="WTM Casablanca. Connect. Create. Celebrate."
          />
        </a>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `GDG & WTM Casablanca`,
}
