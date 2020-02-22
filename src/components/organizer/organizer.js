import React from 'react'

import './organizer.css'
import Link from '../link/link'

const Organizer = ({ name, imgLink, job, link }) => {
  return (
    <div className='organizer'>
      <div className='inner-organizer'>
        <Link to={link} external classes='link'>
          <img src={imgLink} alt={name} className='organizer-image' />
          <p className='organizer-name'>{name}</p>
          <p className='organizer-function'>{job}</p>
        </Link>
      </div>
    </div>
  )
}

export default Organizer
