import React from 'react'

import './base-section.css'

export const BaseSection = ({
  children,
  SectionTitle,
  classNames = '',
  id,
}) => {
  return (
    <section className={'section ' + classNames} id={id}>
      <div className="container">
        <h1 className="heading">
          <SectionTitle />
        </h1>
        {children}
      </div>
    </section>
  )
}
