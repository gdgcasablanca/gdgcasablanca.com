import React from 'react'

import './footer.css'

export const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <h1 class="organizer">GDG Casablanca</h1>
        <nav class="links">
          <a
            href="https://www.meetup.com/GDGCasablanca/"
            class="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meetup
          </a>
          <a
            href="https://www.twitter.com/GDGCasablanca/"
            class="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.facebook.com/GDGCasa/"
            class="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/company/GDGCasablanca/"
            class="link"
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
