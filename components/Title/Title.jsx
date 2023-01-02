import React from 'react'
import styles from './Title.module.css'

export default function Title({children, ...props}) {
  return (
    <h1 {...props} className={styles.title}>
      {children}
    </h1>
  )
}