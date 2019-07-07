import React from 'react'

import './organizer.css'

const Organizer = ({ name, imgLink, job, link }) => {
  return (
    <div class="organizer">
      <div className="inner-organizer">
        <a href={link} class="link" target="_blank" rel="noopener noreferrer">
          <img src={imgLink} alt={name} class="organizer-image" />
          <p class="organizer-name">{name}</p>
          <p class="organizer-function">{job}</p>
        </a>
      </div>
    </div>
  )
}

export default Organizer
