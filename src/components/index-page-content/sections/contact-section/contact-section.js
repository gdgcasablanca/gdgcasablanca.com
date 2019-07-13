import React from 'react'

import { BaseSection } from '../../../base-section/base-section'
import Link from '../../../link/link'

export const ContactSection = () => (
  <BaseSection
    SectionTitle={() => <>Contact.</>}
    classNames="contact"
    id="Contact"
  >
    <p className="p">
      Contact us via email: &nbsp;
      <Link to="mailto:contact@gdgcasablanca.com" external>
        contact@gdgcasablanca.com
      </Link>
    </p>
  </BaseSection>
)
