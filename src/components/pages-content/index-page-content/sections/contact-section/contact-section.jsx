import React from 'react'

import BaseSection from '../../../../base-section/base-section'
import Link from '../../../../link/link'
import Text from '../../../../ui/text/text'

export const ContactSection = () => (
  <BaseSection SectionTitle='Contact.' classes='contact' id='Contact'>
    <Text>
      Contact us via email:{' '}
      <Link to='mailto:contact@gdgcasablanca.com' external>
        contact@gdgcasablanca.com
      </Link>
    </Text>
  </BaseSection>
)
