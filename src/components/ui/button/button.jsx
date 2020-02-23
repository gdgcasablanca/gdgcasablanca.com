import React from 'react'
import cx from 'classnames'

import styles from './button.module.css'

const Button = ({ children, label, as, onClick, classes, ...otherProps }) => {
  const Comp = as || 'button'

  return (
    <Comp
      onClick={onClick}
      className={cx(styles.button, classes)}
      {...otherProps}
    >
      {label || children}
    </Comp>
  )
}

export default Button
