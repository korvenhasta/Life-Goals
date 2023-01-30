import React from 'react'
import styles from './Container.module.css'

export default function Container({
  children,
  ...props
}) {
  return (
    <div
      {...props}
      className={styles.container}
    >
      {children}
    </div>
  )
}
