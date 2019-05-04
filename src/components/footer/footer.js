import React from 'react'

import './footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h1 className="organizer">GDG Casablanca</h1>
        <nav className="links">
          <a
            href="https://www.meetup.com/GDGCasablanca/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meetup
          </a>
          <a
            href="https://www.twitter.com/GDGCasablanca/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.facebook.com/GDGCasa/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/company/GDGCasablanca/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  )
}
