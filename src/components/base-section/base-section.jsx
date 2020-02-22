import React from 'react'
import cx from 'classnames'

import styles from './base-section.module.css'

const BaseSection = ({
  children,
  SectionTitle = '',
  classes,
  id,
  bg,
  as,
  smallText,
  ...otherProps
}) => {
  const Comp = as || 'section'

  console.log(typeof SectionTitle)

  const title =
    typeof SectionTitle === 'string' ? SectionTitle : <SectionTitle />

  return (
    <Comp
      className={cx(styles.section, { [styles.sectionBg]: bg }, classes)}
      id={id}
      {...otherProps}
    >
      <div className='container'>
        {smallText && <span className={styles.smallText}>{smallText}</span>}
        {title && <h1 className={styles.heading}>{title}</h1>}
        {children}
      </div>
    </Comp>
  )
}

export default BaseSection
