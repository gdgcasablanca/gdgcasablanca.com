import React from 'react'
import _Link from 'gatsby-link'

const Link = ({
  to,
  children,
  external,
  ...props,
}) => {
  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <_Link to={to} {...props}>
      {children}
    </_Link>
  )
}

export default Link
