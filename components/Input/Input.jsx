import React from 'react'
import styles from './Input.module.css'

export default function Input({
  children,
  ...props
}) {
  return (
    <input
      {...props}
      className={styles.input}
    >
      {children}
    </input>
  )
}
