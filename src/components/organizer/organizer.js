import React from 'react'

import './organizer.css'
import Link from '../link/link';

const Organizer = ({ name, imgLink, job, link }) => {
  return (
    <div class="organizer">
      <div className="inner-organizer">
        <Link
          to={link}
          external
          class="link"
        >
          <img src={imgLink} alt={name} class="organizer-image" />
          <p class="organizer-name">{name}</p>
          <p class="organizer-function">{job}</p>
        </Link>
      </div>
    </div>
  )
}

export default Organizer
