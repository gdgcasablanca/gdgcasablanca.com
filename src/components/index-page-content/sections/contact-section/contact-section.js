import React from 'react'

import { BaseSection } from '../../../base-section/base-section'

export const ContactSection = () => (
  <BaseSection
    SectionTitle={() => <>Contact.</>}
    classNames="contact"
    id="Contact"
  >
    <p className="p">
      Contact us via email: &nbsp;
      <a href="mailto:contact.gdgcasablanca@gmail.com">
        contact.gdgcasablanca@gmail.com
      </a>
    </p>
  </BaseSection>
)
