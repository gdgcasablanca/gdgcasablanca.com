import React, { memo } from 'react'

import styles from './no-results-card.module.css'

const NoResultsCard = memo(function NoResultsCard(props) {
  return (
    <div className={styles.noResultsCard}>
      <h3 className={styles.title}>There is no planned events for now.</h3>
    </div>
  )
})

export default NoResultsCard
