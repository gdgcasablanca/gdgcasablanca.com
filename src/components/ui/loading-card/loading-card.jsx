import React, { memo } from 'react'

import styles from './loading-card.module.css'

const LoadingCard = memo(function LoadingCard() {
  return (
    <div className={styles.loadingCard}>
      <div className={[styles.title, styles.gradient].join(' ')} />
      <div
        className={[styles.title, styles.gradient].join(' ')}
        style={{ width: '75%' }}
      />

      <div className={styles.listItems}>
        <div className={[styles.listItem, styles.gradient].join(' ')} />
        <div className={[styles.listItem, styles.gradient].join(' ')} />
        <div className={[styles.listItem, styles.gradient].join(' ')} />
      </div>

      <div className={[styles.moreLink, styles.gradient].join(' ')} />
    </div>
  )
})

export default LoadingCard
