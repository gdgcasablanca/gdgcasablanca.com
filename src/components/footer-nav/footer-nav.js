import React from 'react'

import Link from '../link/link'
import './footer-nav.css'

const FooterNav = ({
  links,
  title,
}) => {
  return (
    <nav className="links-block" aria-label={`${title} link list`}>
      <h5>{title}</h5>
      <ul className="links-list">
        {links.map(({ link, label, external }, index) => (
          <li key={index}>
            <Link to={link} external={external}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default FooterNav
