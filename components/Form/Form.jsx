import React from 'react'
import styles from './Form.module.css'

export default function Form({
  children,
  ...props
}) {
  return (
    <form
      {...props}
      className={styles.Form}
    >
      {children}
  </form>
  )
}
