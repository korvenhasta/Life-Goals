import React from 'react'
import styles from './Subtitle.module.css'

export default function Subtitle({
    children, 
    ...props
  }) {
  return (
    <h2 
      {...props} 
      className={styles.subtitle}
      >
        {children}
    </h2>
  )
}