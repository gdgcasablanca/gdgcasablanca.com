import React from 'react'
import cx from 'classnames'
import { Link as GatsbyLink } from 'gatsby'

import styles from './link.module.css'

const Link = ({ to, children, external, classes, ...props }) => {
  const allClasses = cx(styles.link, classes)

  if (external) {
    return (
      <a
        href={to}
        target='_blank'
        rel='noopener noreferrer'
        className={allClasses}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <GatsbyLink to={to} className={allClasses} {...props}>
      {children}
    </GatsbyLink>
  )
}

export default Link
