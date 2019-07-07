import React from 'react'

import './footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <div class="container">
        <div style={{ width: '100%' }}>
          <p class="small-text">Developer community</p>
          <h1>GDG Casablanca.</h1>
          <div class="links-block-wrapper">
            <div class="links-block">
              <h5>Socials</h5>
              <ul class="links-list">
                <li>
                  <a
                    href="https://www.meetup.com/GDGCasablanca/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Meetup
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/33208344/admin/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/gdgcasablanca"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/GDGCasa/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div class="links-block">
              <h5>About</h5>
              <ul class="links-list">
                <li>
                  <a
                    href="https://gdgcasablanca.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GDG Casablanca
                </a>
                </li>
                <li>
                  <a
                    href="https://wtm.gdgcasablanca.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WTM Casablanca
                </a>
                </li>
              </ul>
            </div>
            <div class="links-block">
              <h5>Partners</h5>
              <ul class="links-list">
                <li>
                  <a
                    href="mailto:contactgdgcasablanca@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    contactgdgcasablanca@gmail.com
                </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
