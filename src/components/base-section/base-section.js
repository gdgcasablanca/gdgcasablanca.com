import React from 'react'

import './base-section.css'

export const BaseSection = ({ children, sectionTitle, classNames, id }) => {
  return (
    <section className={'section ' + classNames} id={id}>
      <div className="container">
        <h1
          className="heading"
          dangerouslySetInnerHTML={{ __html: sectionTitle }}
        />
        {children}
      </div>
    </section>
  )
}
