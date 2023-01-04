import React from 'react'
import styles from './Button.module.css'

export default function Button({children, variant, ...props}) {
  return (
    <button {...props} className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  )
}
