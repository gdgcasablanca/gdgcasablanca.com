import React from 'react'

import './base-section.css'

export const BaseSection = ({ children, sectionTitle, classNames }) => {
  return (
    <section className={'section ' + classNames}>
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
