import React from 'react'
import styles from './Loading.module.css'
import loading from '../../img/loading.svg'

function Loading() {
  return (
    <div className={styles.container__loading}>
        <img className={styles.loading} src={loading} alt="Loading" />
    </div>
  )
}

export default Loading